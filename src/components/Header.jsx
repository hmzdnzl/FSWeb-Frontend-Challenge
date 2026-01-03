import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LinkedinIcon from "../assets/linkedin-logo.svg?react";
import heroimg from "../assets/hero-right.png";
import githubfoto from "../assets/profile/githubfoto.png";
import profilfoto from "../assets/profile/profilFoto.png";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { toast } from 'react-toastify';
import axios from "axios";
import './Header.css';





export default function Header() {
  const { headerData, headerDataTr, darkMode, setDarkMode, language, setLanguage, footerData } =
    useContext(GlobalContext);

  function handleDarkModeChange(event) {
    setDarkMode(event.target.checked);
    console.log(event.target.checked);
  }

  

  function handleLanguageChange() {
    setLanguage(language === "en" ? "tr" : "en");
    if(language==="tr"){
    toast.info("Türkçe'ye geçildi", {
      autoClose: 500,    
    });
  }else{
    toast.info("Switched to English", {
      autoClose: 500,
    });
  }
  axios.post("https://reqres.in/api/workintech", {
      name: headerData.name,
      email: footerData.mailAddress
    }, {
  headers: {
    "x-api-key": "reqres-free-v1"
  }})
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });

    console.log(language);
  }

  

 return (
  <div id="header" className="relative overflow-x-hidden font-inter pt-[10px] h-[671px] w-[1440px]">
  <div id="arkaplan" className="absolute top-0 left-0 w-full h-full flex z-[1]">
        <section
          id="left"
          className={`${darkMode ? "bg-[#171043]" : "bg-[#4731D3]"} w-[70%] h-full`}
        ></section>
        <section
          id="right"
          className={`${darkMode ? "bg-[#211F0B]" : "bg-[#CBF281]"} w-[30%] h-full`}
        ></section>
      </div>
  <div id="ust" className="relative w-[66%] h-[72px] flex items-center justify-between m-[2.5rem_auto] z-[10]">
        <p id="isim"
          className={`hidden md:block ${
            darkMode ? " text-[#CBF281]" : " text-[#CBF281]"
          } text-[32px]`}
        >
          {headerData.name}
        </p>

  <section id="langDark" className="flex h-[72px] w-[35%] justify-between items-start">
          <a
            id="language"
            href="#"
            onClick={handleLanguageChange}
            className="no-underline"
          >
            <span
              className={`${
                darkMode==true && language === "en" ? "text-[rgb(186,178,231)]" : ""
              } 
              ${darkMode==false && language === "en"? "text-[#CBF281]": ""}
              ${
              darkMode==true && language === "tr"
                  ? "text-[#777777] ml-[-25px] mr-2"
                  : "text-[#777777] ml-[-25px] mr-2"
              } text-[15px]`}
            >
              {language === "en" ? "TÜRKÇE" : "SWITCH TO"}
            </span>
            <span
              className={`${
                darkMode==true && language ==="tr"? "text-[rgb(186,178,231)]" : ""
              } ${
               darkMode==false && language === "tr" ? "text-[#CBF281]" : ""
              } 
              ${
                darkMode==true && language === "en"
                  ? "text-[#777777] "
                  : "text-[#777777] "
              }
              text-[15px] `}
            >
              {language === "en" ? "'YE GEÇ" : "ENGLISH"}
            </span>
          </a>
          <label id="darkalanı" className="pl w-full relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleDarkModeChange}
              value=""
              className="sr-only peer"
            />
            <div id="onoff"
              className="w-11 h-6 absolute left-[-40px] bg-gray-200 rounded-full peer 
             dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
               after:content-[''] after:absolute after:top-[2px] 
              after:start-[1px] after:bg-[#FFE86E] 
              after:rounded-full after:h-5 after:w-5 after:transition-all
               peer-checked:bg-[#8F88FF]"
            ></div>
            <span id="modename"
              className={`${
                darkMode
                  ? "ms-3 mr-[-24px] pr-7 font-medium text-[#ffffff]"
                  : "ms-3 mr-[-24px] pr-7 font-medium text-gray-900 "
              }`}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </label>
        </section>
      </div>
  <div id="orta" className="w-[66%] h-[376px] relative z-[10] m-[0_17%] flex items-end justify-between box-border">
  <section className="w-[55%] flex flex-col gap-7" id="baslikyazılogolar">
          <h1 id="baslik"
            className={`${
              darkMode ? "text-[#CBF281]" : "text-[#CBF281]"
            } font-bold text-[54px] leading-[110%]`}
          >
            {language === "en" ? headerData.title : headerDataTr.title}
          </h1>
          <p id="yazi" className={darkMode ? "text-[24px] text-white" : "text-[24px] mobile:text-white text-[#22223B]"}>
            {language === "en" ? headerData.text : headerDataTr.text}
          </p>
          <div id="logolar" className="flex gap-[20px]">
            <button id="githubbutton">
              <a href={headerData.github}>
                <div id="github">
                  <div
                    className={`${
                      darkMode
                        ? "bg-[#252128] border border-white"
                        : "bg-[#ffffff]"
                    } w-[127px] h-[52px] gap-2 items-center rounded-[6px] p-2 flex`}
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className=""
                      color={darkMode ? "#ffffff" : "#3730A3"}
                      size="2x"
                    />
                    <p
                      className={`${
                        darkMode ? "text-[#D9D9D9]" : "text-[#3730A3]"
                      } text-[18px] w-[58px] h-[29px]`}
                    >
                      Github
                    </p>
                  </div>
                </div>
              </a>
            </button>
            <button id="linkedinbutton"
              className={`${
                darkMode ? "border border-white rounded-[6px]" : ""
              }`}
            >
              <a href={headerData.linkedin}>
                <div id="linkedin">
                  <div
                    className={`${
                      darkMode ? "bg-[#252128]" : "bg-[#ffffff]"
                    }  w-[127px] h-[52px] gap-2 items-center rounded-[6px] p-2 flex`}
                  >
                    <LinkedinIcon
                      style={{ color: darkMode ? "#fff" : "#3730A3" }}
                      className={`w-8 h-8 ${
                        darkMode ? "fill-white " : "fill-[#3730A3]"
                      }`}
                    />
                    <p
                      className={`${
                        darkMode ? "text-[#ffffff]" : "text-[#3730A3]"
                      } text-[18px] w-[80px] h-[29px] pl-1`}
                    >
                      Linkedin
                    </p>
                  </div>
                </div>
              </a>
            </button>
        
          </div>
        </section>

        <section id="resimalanı" className="w-[40%] relative">
          <img id="resim" src={githubfoto} className="w-[350px] h-[350px] rounded-[16px] z-[5] mb-[-23px] ml-[80px]" />
        </section>
      </div>
    </div>
  );
}
