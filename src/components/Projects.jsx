import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

 


export default function Projects() {
     const { darkMode } = useContext(GlobalContext);
       return(
        <div id="projects" className={`w-[1440px] h-[1039px] ${darkMode ? "bg-[#1A210B]" : "bg-[#CBF281]"} `}>

        </div>
    )
}