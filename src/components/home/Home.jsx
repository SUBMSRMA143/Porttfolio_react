import { Helmet } from "react-helmet"

const Home = () => {
    return (
        <div id="1" className="relative w-[100vw] flex justify-center items-center">
            <canvas id="canvas" className="opacity-60 z-[1] fixed"></canvas>
            <div className=" text-center pt-10 flex flex-col gap-5 my-[16%] justify-center items-center">
                <p className="text-xl">Hi, I'm</p>
                <h1 className="w-[100%] text-blue-100 text-6xl">Shubham Parashar</h1>
                <h3 className="w-[100%] text-blue-500 text-3xl">FrontEnd Web-developer</h3>
                <a href="#2"
                    className="z-[2] border-dotted border-b-2 text-white hover:scale-110 duration-200 hover:bg-white hover:text-black ">Know
                    More</a>
            </div>
            <Helmet><script src=".././scriptMonster.js"></script></Helmet>
        </div>
    )
}

export default Home
