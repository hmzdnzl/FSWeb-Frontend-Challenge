import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LinkedinIcon from "../assets/linkedin-logo.svg?react";
import heroimg from "../assets/hero-right.png";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
export default function Header() {
  const { headerData, darkMode, setDarkMode } = useContext(GlobalContext);

  function handleDarkModeChange(event) {
    setDarkMode(event.target.checked);
    console.log(event.target.checked);
  }

  return (
    <div id="header">
      <div id="arkaplan">
        <section
          id="left"
          className={`${darkMode ? "bg-[#171043]" : "bg-[#4731D3]"}`}
        ></section>
        <section
          id="right"
          className={`${darkMode ? "bg-[#211F0B]" : "bg-[#CBF281]"}`}
        ></section>
      </div>
      <div id="ust">
        <p
          className={`${
            darkMode ? " text-[#CBF281]" : " text-[#CBF281]"
          } text-[32px]`}
        >
          {headerData.name}
        </p>

        <section id="langDark">
          <a id="language" href="#" className="no-underline">
            <span
              className={`${
                darkMode ? "text-[#D9D9D9]" : " text-[#CBF281]"
              } text-[15px]`}
            >
              TÜRKÇE
            </span>
            <span className="text-[15px] text-[#D9D9D9]">’YE GEÇ</span>
          </a>
          <label className="pl relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleDarkModeChange}
              value=""
              className="sr-only peer"
            />
            <div
              className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4
             dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
               after:content-[''] after:absolute after:top-[2px] 
              after:start-[1px] after:bg-[#FFE86E] 
              after:rounded-full after:h-5 after:w-5 after:transition-all
               peer-checked:bg-[#8F88FF]"
            ></div>
            <span
              className={`${
                darkMode
                  ? "ms-3 mr-[-24px] pr-7 font-medium text-gray-900 dark:text-[#ffffff]"
                  : "ms-3 mr-[5px] pr-7 font-medium text-gray-900 dark:text-[#4731D3]"
              }`}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </label>
        </section>
      </div>
      <div id="orta">
        <section className="w-[55%] flex flex-col gap-7" id="baslikyazılogolar">
          <h1
            className={`${
              darkMode ? "text-[#CBF281]" : "text-[#CBF281]"
            } font-bold text-[54px] leading-[110%]`}
          >
            {headerData.title}
          </h1>
          <p className="text-white text-[24px] ">{headerData.text}</p>
          <div id="logolar">
            <button>
              <a href={headerData.github}>
                <div id="github">
                  <div
                    className={`${
                      darkMode ? "bg-[#252128]" : "bg-[#ffffff]"
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
            <button>
              <a href={headerData.linkedin}>
                <div id="linkedin">
                  <div
                    className={`${
                      darkMode ? "bg-[#252128]" : "bg-[#ffffff]"
                    }  w-[127px] h-[52px] gap-2 items-center rounded-[6px] p-2 flex`}
                  >
                    <LinkedinIcon style={{ color: darkMode ? "#fff" : "#3730A3" }} 
                      className={`w-8 h-8 ${
                        darkMode ? "fill-white" : "fill-[#3730A3]"
                      }`}
                    />
                    <p
                      className={`${
                        darkMode ? "text-[#ffffff]" : "text-[#3730A3]"
                      } text-[18px] w-[58px] h-[29px]`}
                    >
                      Linkedin
                    </p>
                  </div>
                </div>
              </a>
            </button>
          </div>
        </section>

        <section id="resim">
          <img src={heroimg} width={350} height={375} className="" />
        </section>
      </div>
    </div>
  );
}
