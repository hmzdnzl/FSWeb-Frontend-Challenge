import { createContext, useEffect, useState } from "react";
import { data } from "../data";
import { text } from "@fortawesome/fontawesome-svg-core";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);  
  const [headerData, setHeaderData] = useState({
name:"",
title:"",
text:"",
github:"",
linkedin:"",
img:{},
  });
  const [profileData, setProfileData] = useState({
    title:"",
    subtitle:"",
    birthLabel:"",
    birth:"",
    addressLabel:"",
    address:"",
    educationLabel:"",
    education:"",
    preferredRoleLabel:"",
    preferredRole:"",
    img:{},
    aboutme:[
      {title:""},
      {text:""}
    ]
  });
  const [projectData, setProjectData] = useState([]);
  const [projectTitle, setProjectTitle] = useState("");
  const [footerData, setFooterData] = useState({
    title:"",
    text:"",
    mailAddress:"",
    connections:[]
  });

  const [language, setLanguage] = useState("en");

   const [headerDataTr, setHeaderDataTr] = useState({
name:"",
title:"",
text:"",
github:"",
linkedin:"",
img:{},
  });







  

   useEffect(() => {
    setProfileData({
      title: data.en.ProfileSection[0]?.title,
      subtitle: data.en.ProfileSection[1]?.subtitle,
      birthLabel: data.en.ProfileSection[2]?.birthLabel,
      birth: data.en.ProfileSection[3]?.birth,
      addressLabel: data.en.ProfileSection[4]?.addressLabel,
      address: data.en.ProfileSection[5]?.address,
      educationLabel: data.en.ProfileSection[6]?.educationLabel,
      education: data.en.ProfileSection[7]?.education,
      preferredRoleLabel: data.en.ProfileSection[8]?.preferredRoleLabel,
      preferredRole: data.en.ProfileSection[9]?.preferredRole,
      img: data.en.ProfileSection[10]?.img,
      aboutme: data.en.ProfileSection[11]?.aboutme
    });

    setHeaderData({
      name: data.en.HeaderSection[0]?.name || "",
      title: data.en.HeaderSection[1]?.title || "",
      text: data.en.HeaderSection[2]?.text || "",
      github: data.en.HeaderSection[3]?.github || "",
      linkedin: data.en.HeaderSection[4]?.linkedin || "",
      img: data.en.HeaderSection[5]?.img || {},
    });
    setHeaderDataTr({
      name: data.tr.HeaderSection[0]?.name || "",
      title: data.tr.HeaderSection[1]?.title || "",
      text: data.tr.HeaderSection[2]?.text || "",
      github: data.tr.HeaderSection[3]?.github || "",
      linkedin: data.tr.HeaderSection[4]?.linkedin || "",
      img: data.tr.HeaderSection[5]?.img || {},
    });

  setProjectData(data.en.ProjectsSection.slice(1));
  setProjectTitle(data.en.ProjectsSection[0]?.title || "Projects");
  setFooterData({
    title: data.en.FooterSection.title || "",
    text: data.en.FooterSection.text || "",
    mailAddress: data.en.FooterSection.mailAddress || "",
    connections: data.en.FooterSection.connections || [],
  });
  }, []);



console.log(headerData);
  return (
    <GlobalContext.Provider value={{
      darkMode,
      setDarkMode,
      headerData,
      headerDataTr,
      profileData, 
      projectData, 
      projectTitle,
      footerData,
      language, setLanguage
    }}>
      {children}
    </GlobalContext.Provider>
  );
}