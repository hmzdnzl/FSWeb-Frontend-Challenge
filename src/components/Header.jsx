import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import linkedinLogo from "../assets/linkedin-logo.svg";
import heroimg from "../assets/hero-right.png";
export default function Header() {
  return (
    <div id="header">
      <div id="arkaplan">
        <section id="left" className="bg-[#4731D3]"></section>
        <section id="right" className="bg-[#CBF281]"></section>
      </div>
      <div id="ust">
        <p className="text-[32px] text-[#CBF281]">Hamza</p>

        <section id="langDark">
          <a id="language" href="#" className="no-underline">
            <span className="text-[15px] text-[#CBF281]">TÜRKÇE</span>
            <span className="text-[15px] text-[#D9D9D9]">’YE GEÇ</span>
          </a>
          <label className="pl relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4
             dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
               after:content-[''] after:absolute after:top-[2px] 
              after:start-[1px] after:bg-[#FFE86E] 
              after:rounded-full after:h-5 after:w-5 after:transition-all
               peer-checked:bg-[#8F88FF]"
            ></div>
            <span className="ms-3 pr-7 font-medium text-gray-900 dark:text-[#4731D3]">
              Dark Mode
            </span>
          </label>
        </section>
      </div>
      <div id="orta">
        <section className="w-[55%] flex flex-col gap-7" id="baslikyazılogolar">
          <h1 className="text-[#CBF281] font-bold text-[54px] leading-[110%] ">
            I am a Frontend Developer...
          </h1>
          <p className="text-white text-[24px] ">
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div id="logolar">
            <button>
            <div id="github">
              <div className="bg-[#ffffff]  w-[127px] h-[52px] gap-2 items-center rounded-[6px] p-2 flex">
                <FontAwesomeIcon
                  icon={faGithub}
                  className=""
                  color="#3730A3"
                  size="2x"
                />
                <p className="text-[#3730A3] text-[18px] w-[58px] h-[29px]">
                  Github
                </p>
              </div>
            </div>
            </button>
            <button>
            <div id="linkedin">
              <div className="bg-[#ffffff]  w-[127px] h-[52px] gap-2 items-center rounded-[6px] p-2 flex">
                <img
                  src={linkedinLogo}
                  alt="LinkedIn Logo"
                  width={32}
                  height={32}
                />
                <p className="text-[#3730A3] text-[18px] w-[58px] h-[29px]">
                  Linkedin
                </p>
              </div>
            </div>
            </button>
          </div>
        </section>

        <section id="resim">
          <img src={heroimg} width={350} height={375} className=""/>          
        </section>
      </div>
    </div>
  );
}
