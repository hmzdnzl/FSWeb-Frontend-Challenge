import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../components/Projects.css";
import { Link } from 'react-router-dom';
import "../components/Header.jsx";
import Header from "../components/Header.jsx";

export default function ProjectsPage() {

  const { darkMode, projectData, projectTitle, projectDataTr, projectTitleTr, language } = useContext(GlobalContext);

  const projects = language === "en" ? projectData : projectDataTr || [];

  function handleReturnHome() {
    window.location.href = "/";
  }

  return (
    <div>
      <Header />
      <div
        id="projects"
        className={`overflow-x-hidden flex flex-col items-center w-[1440px] h-[1039px] ${
          darkMode ? "bg-[#1A210B]" : "bg-[#F9A826]"
        } `}
      >
        <h1 id="projecttitle"
          className={`text-[48px] font-bold flex items-center font-inter md:w-[960px] h-[100px] mb-[40px] pt-[60px] ${
            darkMode ? "text-[#CBF281]" : "text-[#4731D3]"
          }`}
        >
          {language === "en" ? projectTitle : projectTitleTr}
        </h1>
        <section id="allprojects" className="gap-10 flex flex-col">
          {projects.filter(project => [0, 3, 4].includes(project.id)).map((project) => (
            <div id="projectalanı"
              key={project.id}
              className={` flex justify-between items-center ${
                darkMode ? "bg-[#2B2727]" : "bg-white"
              }`}
            >
              <div id="imagealanı"
                className="border-r border-[#D2D2D2] flex w-[360px] h-[360px]"
              >
                <img id="image"
                  className="w-full h-full object-cover rounded-tl-[12px] rounded-bl-[12px]"
                  src={project.projectimg}
                  alt={project.title}
                />
              </div>
              <section>
                <div id="info"
                  className=" flex flex-col gap-y-4 pl-8 w-[584px] h-auto px-5"
                >
                  <h2 id="subtitle"
                    className={`h-auto w-auto text-[32px] flex flex-wrap items-center ${
                      darkMode ? "text-[#C1BAED]" : "text-[#4731D3]"
                    }`}
                  >
                    {project.subtitle}
                  </h2>
                  <p id="description"
                    className={`${
                      darkMode ? "text-[#FFFFFF]" : "text-[#383838]"
                    }`}
                  >
                    {project.projectDetails?.description}
                  </p>
                  <div id="technologies" className="flex gap-2 ">
                    {project.projectDetails?.technologies?.map((tech) => (
                      <span
                        className={`${
                          darkMode
                            ? "flex bg-[#8173DA] w-[68px] h-[31px]  rounded-[23px] text-white"
                            : "flex bg-[#4731D3] w-[68px] h-[31px]  rounded-[23px] text-white"
                        }`}
                        key={tech.id}
                      >
                        <p className="border border-[#4731D3] rounded-[23px] w-[70px] h-[31px] flex  justify-center">
                          {tech.name}
                        </p>
                      </span>
                    ))}
                  </div>
                  <nav id="projectlinks" className="font-inter font-medium text-[16px] flex gap-11 underline">
                    <a
                      href={project.projectDetails?.viewSiteLink}
                      className={`${darkMode ? "text-[#CBF281]" : "text-[#120B39]"} `}
                    >
                      {language === "en" ? "View Site" : "Siteyi Görüntüle"}
                    </a>
                    <a
                      href={project.projectDetails?.githubLink}
                      className={`${darkMode ? "text-[#CBF281]" : "text-[#120B39]"} `}
                    >
                      GitHub
                    </a>
                  </nav>
                </div>
              </section>
            </div>
          ))}              
        </section>
        <div className="flex w-full max-w-[1010px] justify-end pr-8">
          <button onClick={handleReturnHome} className="border mt-6 md:mb-0 mb-5 rounded-md p-1 bg-[#4731D3] border-[#4731D3] text-white" >{language==="en" ? "Return to Home" : "Anasayfaya Dön"}</button>
        </div>
      </div>
    </div>
  );
}