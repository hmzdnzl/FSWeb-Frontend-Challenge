import { useContext } from "react";
import { data } from "../data"
import { GlobalContext } from "../context/GlobalContext";


export default function Skills() {
    const { headerData, darkMode, setDarkMode} = useContext(GlobalContext);
    return(
        <div id="Skills" className={`${darkMode?"bg-black":"bg-white"} w-[1440px] h-[570px] border border-red-600 flex items-center justify-center`}>
        <div id="main" className="w-[960px] h-[430px] border border-red-600 flex justify-between " >
        <h1 className={`${darkMode?"text-white ": "text-[#4832D3]"} text-[48px] font-bold font-inter`}>
        {data.SkillsSection[0].title}
        </h1>
       <div className="w-[290px] h-full border border-red-600">
  {data.SkillsSection.filter(item => item.id < 4).map(item => (
    <div key={item.id} className="flex items-center justify-between gap-1 my-2">
      <img src={item.logo} alt={item.name} className="w-8 h-8" />
      <span>{item.name}</span>
    </div>
  ))}
</div>
           <div className="w-[290px] h-full border border-red-600">
  {data.SkillsSection.filter(item => item.id >= 4).map(item => (
    <div key={item.id} className="flex items-center justify-between gap-1 my-2">
      <img src={item.logo} alt={item.name} className="w-8 h-8" />
      <span>{item.name}</span>
    </div>
  ))}
</div>
        </div>
        </div>
    )
}