import Header from "../../components/Header"
import NewsBox from "../../components/NewsBox"
import { useSelector } from 'react-redux'
const Saved = () => {
    const news = useSelector((state) => state.saved.data)
    return(
        <div className="w-11/12 flex justify-center mt-20 flex-col">
            <Header title="Saved News"/>
            {news.length === 0 && (
                <div className="text-center mt-12 text-xl font-medium">No Saved News</div>
            )}
            <div className="mt-4 md:grid md:grid-cols-4 md:gap-4">
                {news.map((i, index) => (
                    <NewsBox key={index} sourceName={i.sourceName} title={i.title} author={i.author} description={i.description} url={i.url}/>
                ))  }
            </div>
        </div>
    )
}
export default Saved