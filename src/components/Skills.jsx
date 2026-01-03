import { useContext } from "react";
import { data } from "../data"
import { GlobalContext } from "../context/GlobalContext";
import './Skills.css';


export default function Skills() {
    const { headerData, darkMode, setDarkMode, language } = useContext(GlobalContext);
    return(
        <div id="Skills" className={`overflow-x-hidden ${darkMode?"bg-[#252128]":"bg-white"} w-[1440px] h-[570px]  flex items-center justify-center`}>
                 
        <div id="main" className="w-[960px] h-[430px]  flex justify-end ">
         <h1 id="skillsbaslik" className={`${darkMode?"text-[#CBF281] ": "text-[#4832D3]"} text-[48px] mr-[20px] w-[300px] z-10 font-bold font-inter`}>{language == "en" ? "Skills" : "Yetenekler"}</h1>
       <div id="blok1" className="flex mr-[120px] flex-col place-content-start w-[290px] gap-y-[13px] h-full z-0 ">
  {data.en.SkillsSection.filter(item => item.id < 4).map(item => (
    <div id="imgname" key={item.id} className="flex items-center   h-[120px] w-[290px] gap-7 my-2">
      <img id="skillimg" src={item.logo} alt={item.name} className=" h-full w-auto rounded-[6px]" />
      <span id="skillname" className={`${darkMode ? "text-[#FFFFFF]" : "text-[#777777]"} text-[24px] font-medium`}>{item.name}</span>
    </div>
  ))}
</div>
           <div id="blok2" className="flex flex-col place-content-start w-[250px] gap-y-[13px] h-full ">
  {data.en.SkillsSection.filter(item => item.id >= 4).map(item => (
    <div id="imgname" key={item.id} className="flex items-center   h-[120px] w-[290px] gap-7 my-2">
      <img id="skillimg" src={item.logo} alt={item.name} className=" h-full w-auto rounded-[6px] " />
      <span id="skillname" className={`${darkMode ? "text-[#FFFFFF]" : "text-[#777777]"} text-[24px] font-medium`}>{item.name}</span>
    </div> 
  ))}
</div>
        </div>
        </div>
    )
}