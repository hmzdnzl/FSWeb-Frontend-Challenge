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

   useEffect(() => {
    setProfileData({
      title: data.ProfileSection[0]?.title,
      subtitle: data.ProfileSection[1]?.subtitle,
      birthLabel: data.ProfileSection[2]?.birthLabel,
      birth: data.ProfileSection[3]?.birth,
      addressLabel: data.ProfileSection[4]?.addressLabel,
      address: data.ProfileSection[5]?.address,
      educationLabel: data.ProfileSection[6]?.educationLabel,
      education: data.ProfileSection[7]?.education,
      preferredRoleLabel: data.ProfileSection[8]?.preferredRoleLabel,
      preferredRole: data.ProfileSection[9]?.preferredRole,
      img: data.ProfileSection[10]?.img,
      aboutme: data.ProfileSection[11]?.aboutme
    });

    setHeaderData({
      name: data.HeaderSection[0]?.name || "",
      title: data.HeaderSection[1]?.title || "",
      text: data.HeaderSection[2]?.text || "",
      github: data.HeaderSection[3]?.github || "",
      linkedin: data.HeaderSection[4]?.linkedin || "",
      img: data.HeaderSection[5]?.img || {},
    });

   
  setProjectData(data.ProjectsSection.slice(1));
  setProjectTitle(data.ProjectsSection[0]?.title || "Projects");
  }, []);



console.log(headerData);
  return (
    <GlobalContext.Provider value={{
      darkMode,
      setDarkMode,
      language, 
      headerData, 
      profileData, 
      projectData, 
      projectTitle,
    }}>
      {children}
    </GlobalContext.Provider>
  );
}