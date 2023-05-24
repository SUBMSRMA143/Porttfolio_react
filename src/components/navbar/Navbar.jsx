const Navbar = () => {
    return (
        <nav className="absolute w-[100%] h-min border-b-[1px] border-gray-400 z-10">
            <div className="flex justify-between px-10 py-5 h-100 w-100 backdrop-blur items-center">
                <a href="#1" className="text-xl"><span className="text-2xl font-bold text-blue-500">S</span>hubham</a>
                <ul className="flex gap-10 text-[0.9rem] mr-[150px] items-center">
                    <li className="hover:text-blue-500 cursor-pointer duration-500"><a href="#3">Work</a></li>
                    <li className="hover:text-blue-500 cursor-pointer duration-500"><a href="#2">About</a></li>
                    <li className="hover:text-blue-500 cursor-pointer duration-500"><a href="#3">My Services</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar