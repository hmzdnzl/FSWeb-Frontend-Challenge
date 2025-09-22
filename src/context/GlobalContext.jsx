import { createContext, useEffect, useState } from "react";
import { data } from "../data";
import { text } from "@fortawesome/fontawesome-svg-core";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [headerData, setHeaderData] = useState({
name:"",
title:"",
text:"",
github:"",
linkedin:"",
img:{},
  });

   useEffect(() => {
    
    setHeaderData({
      name: data.HeaderSection[0]?.name || "",
      title: data.HeaderSection[1]?.title || "",
      text: data.HeaderSection[2]?.text || "",
      github: data.HeaderSection[3]?.github || "",
      linkedin: data.HeaderSection[4]?.linkedin || "",
      img: data.HeaderSection[5]?.img || {},
    });
  }, []);



console.log(headerData);
  return (
    <GlobalContext.Provider value={{
      darkMode, setDarkMode,
      language, setLanguage,
      headerData, setHeaderData
    
    }}>
      {children}
    </GlobalContext.Provider>
  );
}