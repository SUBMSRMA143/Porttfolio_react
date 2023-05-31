const Footer = () => {
    return (
        <footer className="w-100 h-[60%]">
            <div className="w-100 h-[100%] border-t-2 flex items-center relative justify-center">
                <div className="w-[100%] h-[100%] bg-blue-900 opacity-20 absolute bottom-0 z-[-1]"></div>
                <div className="flex flex-col items-center gap-5">
                    <a href="#1" className="cursor-pointer z-10 text-4xl"><span className="text-6xl font-light text-blue-500">S</span>hubham <span className="text-6xl font-light text-blue-500">P</span>arashar</a>
                    <div className="w-[180%] max-[500px]:w-[50%] h-[2px] bg-white opacity-50"></div>
                    <div className="flex gap-5 items-center justify-start">
                        <a href="https://github.com/SUBMSRMA143" target="_blank"
                            className="fa fa-brands fa-github fa-xl z-10 fa-beat text-4xl hover:text-blue-500 duration-200 w-min"></a>
                        <a href="https://instagram.com/submsrma143?igshid=MzNlNGNkZWQ4Mg==" target="_blank"
                            className="fa fa-brands fa-instagram fa-xl z-10 fa-beat text-4xl hover:text-blue-500 duration-200 w-min"></a>
                        <a href="https://www.linkedin.com/in/shubham-parashar-developer" target="_blank"
                            className="fa fa-brands fa-linkedin fa-xl z-10 fa-beat text-4xl hover:text-blue-500 duration-200 w-min"></a>
                    </div>
                    <div>
                        <ul className="flex">
                            <a href="#2" className="border-r-[1px] px-5 z-10 hover:text-blue-500 duration-600 cursor-pointer">About</a>
                            <a href="#3" className="border-r-[1px] px-5 z-10 hover:text-blue-500 duration-600 cursor-pointer">Work</a>
                            <a href="#" className="border-r-[1px] px-5 z-10 hover:text-blue-500 duration-600 cursor-pointer">My Services</a>
                            <a href="#" className="px-5 z-10 hover:text-blue-500 duration-600 cursor-pointer">Contact</a>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer