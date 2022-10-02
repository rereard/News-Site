import Header from "../../components/Header"
import NewsBox from "../../components/NewsBox"
import SkeletonLoading from "../../components/Skeleton"
const Home = () => {
    return(
        <div className="w-11/12 flex justify-center mt-20 flex-col">
            <Header title={"What's New"}/>
            <div className="mt-4 md:grid md:grid-cols-4 md:gap-4">
                <NewsBox/>
                <SkeletonLoading/>
                <SkeletonLoading/>
                <SkeletonLoading/>
                <SkeletonLoading/>
                <SkeletonLoading/>
                <SkeletonLoading/>
                <SkeletonLoading/>          
            </div>
        </div>
    )
}
export default Home