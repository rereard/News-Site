import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonLoading = () => {
    return(
        <div className="border-2 p-2 rounded-lg mb-3 md:mb-0">
            <header className="border-b-2">
                <h5 className="text-xl"><Skeleton/></h5>
                <h1 className="text-2xl"><Skeleton/></h1>
                <h3 className="mb-2"><Skeleton/></h3>
            </header>
            <main className="mt-2">
                <p className='text-7xl'><Skeleton/></p>
            </main>
        </div>
    )
}
export default SkeletonLoading