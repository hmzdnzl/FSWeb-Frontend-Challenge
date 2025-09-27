import { useContext } from "react";
import { data } from "../data"
import { GlobalContext } from "../context/GlobalContext";


export default function Skills() {
    const { headerData, darkMode, setDarkMode} = useContext(GlobalContext);
    return(
        <div id="Skills" className={`${darkMode?"bg-[#252128]":"bg-white"} w-[1440px] h-[570px]  flex items-center justify-center`}>
        <div id="main" className="w-[960px] h-[430px]  flex justify-between " >
        <h1 className={`${darkMode?"text-[#CBF281] ": "text-[#4832D3]"} text-[48px] font-bold font-inter`}>
        {data.en.SkillsSection[0].title}
        </h1>
       <div className="flex flex-col place-content-start w-[290px] gap-y-[13px] h-full ">
  {data.en.SkillsSection.filter(item => item.id < 4).map(item => (
    <div key={item.id} className="flex items-center   h-[120px] w-[290px] gap-7 my-2">
      <img src={item.logo} alt={item.name} className=" h-full w-auto rounded-[6px]" />
      <span className={`${darkMode ? "text-[#FFFFFF]" : "text-[#777777]"} text-[24px] font-medium`}>{item.name}</span>
    </div>
  ))}
</div>
           <div className="flex  flex-col place-content-start w-[290px] gap-y-[13px] h-full ">
  {data.en.SkillsSection.filter(item => item.id >= 4).map(item => (
    <div key={item.id} className="flex items-center   h-[120px] w-[290px] gap-7 my-2">
      <img src={item.logo} alt={item.name} className=" h-full w-auto rounded-[6px] " />
      <span className={`${darkMode ? "text-[#FFFFFF]" : "text-[#777777]"} text-[24px] font-medium`}>{item.name}</span>
    </div>
  ))}
</div>
        </div>
        </div>
    )
}