import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import './Profile.css';

export default function Profile() {
  const { darkMode, profileData, language, profileDataTr } = useContext(GlobalContext);
  return (
    <div
      id="profile"
      className={`${
        darkMode ? "bg-[#171043]" : "bg-[#4731D3]"
      } w-[1440px] flex justify-center items-center h-[552px] `}
    >
      <div className="w-[960px] flex flex-col items-start gap-y-6 h-[390px] ">
        <h1
          className={`${
            darkMode ? "text-[#CBF281]" : "text-[#CBF281]"
          } text-[48px] font-bold font-inter my-[-10px] mt-2`}
        >
          {profileData.title}
        </h1>
        <section className="w-[960px] h-[291px] gap-8 flex  ">
          <div className="w-[300px] h-[291px] flex flex-col gap-y-11 items-start">
            <h2 id="profilesubtitle"
              className={`${
                darkMode ? "text-[#CBF281]" : "text-[#ffffff]"
              } text-[30px] font-medium font-inter  `}
            >
              {language === "en" ? profileData.subtitle : profileDataTr.subtitle}
            </h2>
            <section className="flex items-end justify-between w-[300px] h-[222px] ">
              <div className={`text-[#CBF281] text-[16px] flex flex-col ${language === "en" ? "gap-y-5" : "gap-y-5"} font-inter font-semibold w-[105px] h-[202px]`}>
                <p>{language === "en" ? profileData.birthLabel : profileDataTr.birthLabel}</p>
                <p>{language === "en" ? profileData.addressLabel : profileDataTr.addressLabel}</p>
                <p>{language === "en" ? profileData.educationLabel : profileDataTr.educationLabel}</p>
                <p>{language === "en" ? profileData.preferredRoleLabel : profileDataTr.preferredRoleLabel}</p>
              </div>
              <div className={` w-[189px] h-[202px] font-inter text-[16px] text-[#FFFFFF] flex flex-col ${language === "en" ? "gap-y-5" : "gap-y-5"} font-semibold`}>
                <p>{language === "en" ? profileData.birth : profileDataTr.birth}</p>
                <p>{language === "en" ? profileData.address : profileDataTr.address}</p>
                <p>{language === "en" ? profileData.education : profileDataTr.education}</p>
                <p>{language === "en" ? profileData.preferredRole : profileDataTr.preferredRole}</p>
              </div>
            </section>
          </div>

          <div className="w-[300px] h-[287px] rounded-[16px] overflow-hidden">
           { <img
              className="block w-full h-full object-cover"
              src={profileData.img}
              alt="profile"
            />}
          </div>
          <div className=" w-[300px] h-[291px] mt-[-80px] ">
            <h2 className="text-[30px] text-inter text-white">{language === "en" ? profileData.aboutme[0].title : profileDataTr.aboutme[0].title} </h2>
            <p className="text-[18px] text-inter my-3.5 text-white">{language === "en" ? profileData.aboutme[1].text1 : profileDataTr.aboutme[1].text1} </p>
            <p className="text-[18px] text-inter text-white">{language === "en" ? profileData.aboutme[1].text2 : profileDataTr.aboutme[1].text2} </p>
          </div>
        </section>
      </div>
    </div>
  );
}

