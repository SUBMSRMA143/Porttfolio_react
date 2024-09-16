import me from "./aa.jpg"
// import me from "./IMG_20230505_093514.jpg"

const About = () => {
    return (
        <div id="2" className=" w-[100vw] max-[500px]:w-100 h-[100%] pt-[50px]">
            <div
                className="h-[70%] max-[500px]:h-[99%] try w-[100%] backdrop-blur absolute z-[2] flex max-[500px]:flex-col items-center  max-[500px]:px-0 justify-center pl-[200px] border-y-2 border-gray-600">
                <img src={me} alt="picture"
                    className="rounded-full max-[500px]:rounded-none object-cover w-[700px] grayscale-[100%] h-[450px] max-[500px]:h-[300px] " />
                <div className="w-[100%] px-[100px] max-[500px]:px-0 flex flex-col max-[500px]:px-5 py-5 gap-5">
                    <div className="skills flex flex-col gap-3">
                        <h1 className="text-xl text-blue-500">Skills :</h1>
                        <div className="skill_list flex gap-3 flex-wrap">
                            <div className="bg-gray-800 px-4 py-1 rounded-full">HTML</div>
                            <div className="bg-gray-800 px-4 py-1 rounded-full">CSS</div>
                            <div className="bg-gray-800 px-4 py-1 rounded-full">Js</div>
                            <div className="bg-gray-800 px-4 py-1 rounded-full">ReactJs</div>
                            <div className="bg-gray-800 px-4 py-1 rounded-full">C</div>
                            <div className="bg-gray-800 px-4 py-1 rounded-full">C++</div>
                            <div className="bg-gray-800 px-4 py-1 rounded-full">Figma</div>
                            <div className="bg-gray-800 px-4 py-1 rounded-full">Canva</div>
                            <div className="bg-gray-800 px-4 py-1 rounded-full">Photoshop</div>
                            <div className="bg-gray-800 px-4 py-1 rounded-full">Webflow</div>
                        </div>
                    </div>
                    <div className="Education flex flex-col gap-3">
                        <h1 className="text-xl text-blue-500">Education :</h1>
                        <div className="Education_list flex gap-3 h-[150px] flex-wrap">
                            <div className="bg-gray-800 px-4 py-1 rounded-3xl py-3 flex flex-col gap-2">
                                <h1>Bachelor in Technology , with specialization in Artificial Intelligence & Data
                                    Science</h1>
                                <h2>from CGC LANDRAN, MOHALI 🗺 </h2>
                                <div className="flex gap-5 items-center justify-start">
                                    <a href="https://github.com/SUBMSRMA143" target="_blank"
                                        className="fa fa-brands fa-github fa-xl fa-beat text-4xl hover:text-blue-500 duration-200 w-min"></a>
                                    <a href="https://instagram.com/submsrma143?igshid=MzNlNGNkZWQ4Mg==" target="_blank"
                                        className="fa fa-brands fa-instagram fa-xl fa-beat text-4xl hover:text-blue-500 duration-200 w-min"></a>
                                    <a href="https://www.linkedin.com/in/shubham-parashar-developer" target="_blank"
                                        className="fa fa-brands fa-linkedin fa-xl fa-beat text-4xl hover:text-blue-500 duration-200 w-min"></a>
                                </div>
                                <a href="#3"
                                    className="border-b-2 w-min hover:text-blue-500 hover:border-blue-500 duration-500 ">Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
