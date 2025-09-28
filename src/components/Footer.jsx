import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  const { darkMode, footerData, footerDataTr, language } = useContext(GlobalContext);
  return (
    <div
      id="footer"
      className={`w-[1440px] h-[454px] flex justify-center items-center  ${
        darkMode ? "bg-[#252128]" : "bg-[#F9F9F9]"
      } `}
    >
      <div
        id="body"
        className="w-[483px] h-[290px] font-inter flex flex-col items-center gap-y-4"
      >
        <h1 id="footer-title" className={`text-[48px] font-bold ${darkMode ? "text-[#8F88FF]" : "text-[#4731D3]"}`}>
          {language === "en" ? footerData.title : footerDataTr.title}
        </h1>
        <p id="footer-description" className={`text-[24px] text-center w-[520px] h-[172px] leading-relaxed font-[400] ${darkMode ? "text-[#FFFFFF]" : "text-[#333333]"}`}>
          {language === "en" ? footerData.text : footerDataTr.text}
        </p>
        <a id="mailaddress"
          className={`text-[20px] font-inter ${darkMode ? "text-[#8F88FF]" : "text-[#4731D3]"} font-[500] underline tracking-[0.05em]`}
          href={`mailto:${footerData.mailAddress}`}
        >
          {footerData.mailAddress}
        </a>
        <div id="social-icons" className="flex gap-6 mt-4">
          {footerData.connections.map((item) => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
              <img id="social-icon" src={darkMode ? item.darkLogo : item.logo} alt="social-icon" className="w-[35px] h-[35px]" />
            </a>
          ))}
        </div>

      </div>
 
    </div>
  );
}
