import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import './Profile.css';

export default function Profile() {
  const { darkMode, profileData, language, profileDataTr } = useContext(GlobalContext);
  return (
    <div
      id="profile"
      className={`overflow-x-hidden ${
        darkMode ? "bg-[#171043]" : "bg-[#4731D3]"
      } w-[1440px] flex justify-center items-center md:h-[552px] h-auto pt-10 pb-20`}
    >
      <div className="w-[960px] flex flex-col items-start gap-y-6 md:h-[390px] h-auto">  
        <h1 id="profileheader"
          className={`${
            darkMode ? "text-[#CBF281]" : "text-[#CBF281]"
          } text-[48px] font-bold font-inter my-[-10px] mt-2`}
        >
          {profileData.title}
        </h1>
        <section id="profiletriple" className="w-[960px] md:h-[291px] h-auto gap-8 flex">
          <div id="profileinfo" className="w-[300px] md:h-[291px] h-auto flex flex-col gap-y-11 items-start">
            <h2 id="profilesubtitle"
              className={`${
                darkMode ? "text-[#CBF281]" : "text-[#ffffff]"
              } text-[30px] font-medium font-inter  `}
            >
              {language === "en" ? profileData.subtitle : profileDataTr.subtitle}
            </h2>
            <section className="flex items-end justify-between w-[300px] h-auto ">
              <div id="labels" className={`text-[#CBF281] text-[16px] flex flex-col ${language === "en" ? "gap-y-5" : "gap-y-5"} font-inter font-semibold w-[105px] h-auto md:h-[202px]`}>
                <p id="birthlabel">{language === "en" ? profileData.birthLabel : profileDataTr.birthLabel}</p>
                <p id="addresslabel">{language === "en" ? profileData.addressLabel : profileDataTr.addressLabel}</p>
                <p id="educationlabel">{language === "en" ? profileData.educationLabel : profileDataTr.educationLabel}</p>
                <p id="preferredrolelabel">{language === "en" ? profileData.preferredRoleLabel : profileDataTr.preferredRoleLabel}</p>
              </div>
              <div id="infos" className={` w-[189px] md:h-[202px] h-auto font-inter text-[16px] text-[#FFFFFF] flex flex-col ${language === "en" ? "gap-y-5" : "gap-y-5"} font-semibold`}>
                <p id="birth">{language === "en" ? profileData.birth : profileDataTr.birth}</p>
                <p id="address">{language === "en" ? profileData.address : profileDataTr.address}</p>
                <p id="education">{language === "en" ? profileData.education : profileDataTr.education}</p>
                <p id="preferredrole">{language === "en" ? profileData.preferredRole : profileDataTr.preferredRole}</p>
              </div>
            </section>
          </div>

          <div id="profileimagealanı" className="w-[300px] h-auto md:h-[287px] rounded-[16px] overflow-hidden">
           { <img
              id="profileimg"
              className="block w-full h-full object-cover"
              src={profileData.img}
              alt="profile"
            />}
          </div>
          <div id="profileaboutme" className=" w-[300px] md:h-[291px] h-auto md:mt-[-80px] mt-[50px]">
            <h2 className="text-[30px] text-inter text-white">{language === "en" ? profileData.aboutme[0].title : profileDataTr.aboutme[0].title} </h2>
            <nav id="aboutmetexts" className="flex flex-col">
            <p id="abmetext1" className="text-[18px] text-inter my-3.5 text-white">{language === "en" ? profileData.aboutme[1].text1 : profileDataTr.aboutme[1].text1} </p>
            <p id="abmetext2" className="text-[18px] text-inter text-white">{language === "en" ? profileData.aboutme[1].text2 : profileDataTr.aboutme[1].text2} </p>
          </nav>
          </div>
        </section>
      </div>
    </div>
  );
}

