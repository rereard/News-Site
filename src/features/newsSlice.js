import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isPending: false,
    loading: false,
    isSuccess: false,
    errorMessage: '',
    data: [],
    totalResult: null
}

export const fetchNews = createAsyncThunk('news/fetchNews', async (API) => {
    try {
        const response = await axios.get(API)
        return response.data
    } catch (e) {
        throw(e)   
    }
})

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        resetNews: (state) => {
            state.data = []
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchNews.pending, (state) => {
            if(state.data.length === 0) {
                state.isPending = true
            } else {
                state.loading = true
            }
            state.isSuccess = false
            state.errorMessage = ''
        })
        .addCase(fetchNews.rejected, (state, action) => {
            state.isPending = false
            state.isSuccess = false
            state.errorMessage = action.error.message
        })
        .addCase(fetchNews.fulfilled, (state, action) => {
            state.totalResult = action.payload.totalResults
            if(state.data.length === 0) {
                state.data = [...action.payload.articles]
            } else {
                state.data = [...state.data, ...action.payload.articles]
            }
            state.isSuccess = true
            state.isPending = false
            state.loading = false
            state.errorMessage = ''
        })
    }
})
export const { resetNews } = newsSlice.actions
export default newsSlice.reducer