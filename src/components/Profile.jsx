import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Profile() {
  const { darkMode, profileData } = useContext(GlobalContext);
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
            <h2
              className={`${
                darkMode ? "text-[#CBF281]" : "text-[#ffffff]"
              } text-[30px] font-medium font-inter  `}
            >
              {profileData.subtitle}
            </h2>
            <section className="flex items-end justify-between w-[300px] h-[222px] ">
              <div className=" text-[#CBF281] text-[16px] flex flex-col gap-y-5 font-inter font-semibold w-[101px] h-[202px]">
                <p>{profileData.birthLabel}</p>
                <p>{profileData.addressLabel}</p>
                <p>{profileData.educationLabel}</p>
                <p>{profileData.preferredRoleLabel}</p>
              </div>
              <div className=" w-[189px] h-[202px] font-inter text-[16px] text-[#FFFFFF] flex flex-col gap-y-5 font-semibold">
                <p>{profileData.birth}</p>
                <p>{profileData.address}</p>
                <p>{profileData.education}</p>
                <p>{profileData.preferredRole}</p>
              </div>
            </section>
          </div>

          <div className="w-[300px] h-[291px] ">
            <img className="w-full h-full object-cover rounded-[10px]"
              src={profileData.img}
              alt="profile"
            />
          </div>
          <div className="w-[300px] h-[291px] ">
            <h2 className="text-[30px] text-inter text-white">{profileData.aboutme[0].title} </h2>
            <p className="text-[18px] text-inter my-3.5 text-white">{profileData.aboutme[1].text1} </p>
            <p className="text-[18px] text-inter text-white">{profileData.aboutme[1].text2} </p>
          </div>
        </section>
      </div>
    </div>
  );
}
{
  /* 
    
    */
}
