import ToDoList_Alltasks from "./To-Do List _ All tasks.png"
import Pikachu from "./Screenshot (1).png"
import eCommerce from "./Screenshot (24).png"
import its from "./Screenshot (25).png"
import { useEffect, useState } from "react"

const Projects = () => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 3000);
    });

    return (
        <div id="3" className="w-[100vw] h-[100%] bg-black flex justify-center items-center">
            <div
                className="w-[60%] h-[80%] z-[1] rounded-3xl border relative backdrop-blur projects flex flex-col justify-center items-center gap-[70px]">
                {/* <div
                    className={`flex justify-around items-center flex-wrap w-[250px] projects transition-all duration-1000 gap-2`} > */}
                <div
                    className="cursor-pointer absolute a w-[120px] h-[120px] hover:z-[10] transition-all duration-[0.5s] rounded-3xl rotate-45 project">
                    <a href="" className="">
                        <img src={ToDoList_Alltasks} className="w-100 h-[100%] object-cover rounded-3xl " alt="img" />
                    </a>
                </div>
                <div
                    className="cursor-pointer absolute b w-[120px] h-[120px] hover:z-[10] transition-all duration-[0.5s] rounded-3xl rotate-45 project">
                    <a href="">
                        <img src={Pikachu} className=" w-100 h-[100%] object-cover rounded-3xl " alt="img" />
                    </a>
                </div>
                <div
                    className="cursor-pointer absolute c  w-[120px] h-[120px] hover:z-[10] transition-all duration-[0.5s] rounded-3xl rotate-45 project">
                    <a href="">
                        <img src={its} className=" w-100 h-[100%] object-cover rounded-3xl " alt="img" />
                    </a>
                </div>
                <div
                    className="cursor-pointer absolute d  w-[120px] h-[120px] hover:z-[10] transition-all duration-[0.5s] rounded-3xl rotate-45 project">
                    <a href="">
                        <img src={eCommerce} className=" w-100 h-[100%] object-cover rounded-3xl " alt="img" />
                    </a>
                </div>
                {/* </div> */}
                <a href="https://github.com/SUBMSRMA143" target="_blank"
                    className="border-dotted border-b-2 absolute bottom-[15%] text-white hover:scale-110 duration-200 hover:bg-white hover:text-black">More</a>
            </div>
        </div>
    )
}

export default Projects