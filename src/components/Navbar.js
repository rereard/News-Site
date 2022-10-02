import { useState } from "react";
import { Link, useNavigate, redirect } from 'react-router-dom'
const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()
    return (
        <nav className="w-full bg-black p-4 text-white flex flex-col md:flex-row md:items-center fixed z-10 top-0">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold">News Site</h1>
                <button className="md:hidden" onClick={() => setIsNavExpanded(!isNavExpanded)}>
                    {!isNavExpanded ? (
                        <i className="fa-solid fa-chevron-down hover:text-gray-300 hover:ease-in-out"></i>
                    ) : (
                        <i className="fa-solid fa-chevron-down rotate-180 transition duration-170 hover:text-gray-300 hover:ease-in-out"></i>
                    )}
                </button>
            </div>
            <div className={isNavExpanded ? "animate-slideDown flex flex-col mt-2 md:mt-0 md:flex-row md:ml-4 md:items-center" : "hidden md:flex md:mt-0 md:flex-row md:ml-4 md:items-center"}>
                <Link to="/" className="font-bold hover:text-gray-300 hover:ease-in-out transition duration-150" onClick={() => setIsNavExpanded(false)}>Indonesia</Link>
                <Link to="/programming" className="font-bold hover:text-gray-300 my-2 md:mx-2 md:my-0 hover:ease-in-out transition duration-150" onClick={() => setIsNavExpanded(false)}>Programming</Link>
                <Link to="/covid" className="font-bold hover:text-gray-300 mb-2 md:mr-2 md:mb-0 hover:ease-in-out transition duration-150" onClick={() => setIsNavExpanded(false)}>COVID-19</Link>
                <Link to="/saved" className="font-bold hover:text-gray-300 hover:ease-in-out transition duration-150" onClick={() => setIsNavExpanded(false)}>Saved</Link>
                <div className="flex items-center mt-2 md:mt-0 md:ml-4">
                    <i className="fa-solid fa-magnifying-glass mr-2"></i>
                    <form onSubmit={(event) => {
                        navigate(`/search/${searchValue}`)
                        setSearchValue('')
                        setIsNavExpanded(false)
                        event.preventDefault()
                    }} className="flex flex-row w-full">
                        <input value={searchValue} className=" w-full text-black pl-2 border-b-2 focus:outline-none mr-2" type="text" placeholder="Search..." onChange={(event) => setSearchValue(event.target.value)}/>
                        <input disabled={searchValue === ''} type="submit" value="Search" className="text-sm border-2 p-2 cursor-pointer hover:bg-slate-700 hover:border-slate-400 hover:ease-in-out transition duration-150 disabled:cursor-default disabled:border-slate-400 disabled:text-slate-400 disabled:hover:bg-black font-bold rounded-lg" />
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar