import Header from "../../components/Header"
import NewsBox from "../../components/NewsBox"
import SkeletonLoading from "../../components/Skeleton"
import LoadingButton from '@mui/lab/LoadingButton';
import { useParams } from "react-router-dom"
import { fetchNews, resetNews } from "../../features/newsSlice"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect,useState } from "react"
import { key } from "../../APIkey";
const Search = () => {
    const params = useParams()
    const isPending = useSelector((state) => state.news.isPending)
    const news = useSelector((state) => state.news.data)
    const totalResult = useSelector((state) => state.news.totalResult)
    const loading = useSelector((state) => state.news.loading)
    const errorMessage = useSelector((state) => state.news.errorMessage)
    let [page, setPage] = useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(resetNews())
        dispatch(fetchNews(`https://newsapi.org/v2/everything?q="${params.searchValue}"-19&sortBy=publishedAt&language=en&pageSize=20&page=${page}&apiKey=${key}`))
    }, [params.searchValue]);
    return(
        <div className="w-11/12 flex justify-center mt-20 flex-col">
            <Header title={`${params.searchValue} News`}/>
            {errorMessage && (
                <div className="text-center mt-12 text-xl font-medium">{errorMessage}</div>
            )}
            {totalResult === 0 && (
                <div className="text-center mt-12 text-xl font-medium">News not found</div>
            )}
            <div className="mt-4 md:grid md:grid-cols-4 md:gap-4">
                {isPending ? (
                    <>
                        <SkeletonLoading/>
                        <SkeletonLoading/>
                        <SkeletonLoading/>
                        <SkeletonLoading/>
                        <SkeletonLoading/>
                        <SkeletonLoading/>
                        <SkeletonLoading/>
                        <SkeletonLoading/>
                    </>
                ) : (
                    news.map((i, index) => (
                        <NewsBox key={index} sourceName={i.source.name} title={i.title} author={i.author === null || i.author === '-' ? '-' : i.author} description={i.description === null ? '-' : i.description} url={i.url}/>
                    ))
                )}       
            </div>
            <div className="text-center my-5">
                {news.length < totalResult && !isPending ? (
                    <LoadingButton loading={loading} variant="contained" onClick={() => {
                        setPage(page+=1)
                        dispatch(fetchNews(`https://newsapi.org/v2/everything?q="${params.searchValue}"-19&sortBy=publishedAt&language=en&pageSize=20&page=${page}&apiKey=${key}`))
                    }}>
                        Load More
                    </LoadingButton>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    )
}
export default Search