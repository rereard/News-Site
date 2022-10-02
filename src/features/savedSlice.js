import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: []
}

const savedSlice = createSlice({
    name: 'saved',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.data = [...state.data, action.payload]
        },
        removeData: (state, action) => {
            const filteredData = state.data.filter((d) => d.url !== action.payload)
            state.data = [...filteredData]
        }
    }
})

export const { addData, removeData } = savedSlice.actions
export default savedSlice.reducer