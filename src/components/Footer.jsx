import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Footer() {
     const { darkMode } = useContext(GlobalContext);
     return(
        <div id="footer" className={`w-[1440px] h-[454px] ${darkMode ? "bg-[#252128]" : "bg-[#F9F9F9]"} border border-red-600`}>

        </div>
    )
}