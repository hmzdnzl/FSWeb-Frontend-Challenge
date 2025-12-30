import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import './Projects.css';
import { Link } from 'react-router-dom';

export default function Projects() {
  const { darkMode, projectData, projectTitle, projectDataTr, projectTitleTr, language } = useContext(GlobalContext);

  const projects = language === "en" ? projectData : projectDataTr || [];

  function handleViewSiteLink() {
    alert(language === "en" ? "This project is developed locally and does not have a live site. Codes are available on GitHub. If you want to see how it works, please contact me." : "Bu proje yerel olarak geliştirilmiştir ve canlı bir siteye sahip değildir. Kodlar GitHub'da mevcuttur. Nasıl çalıştığını görmek isterseniz lütfen benimle iletişime geçin.");
  }
  return (
    <div
      id="projects"
      className={`flex flex-col items-center w-[1440px] h-[1039px] ${
        darkMode ? "bg-[#1A210B]" : "bg-[#CBF281]"
      } `}
    >
      <h1 id="projecttitle"
        className={`text-[48px]  font-bold flex items-center font-inter w-[960px] h-[100px] mb-[40px] pt-[60px] ${
          darkMode ? "text-[#CBF281]" : "text-[#4731D3]"
        }`}
      >
        {language === "en" ? projectTitle : projectTitleTr}
      </h1>
      <section id="allprojects" className="gap-10 flex flex-col">
        {projects.filter(project => [0, 1].includes(project.id)).map((project) => (
          <div
            key={project.id}
            className={` flex justify-between items-center ${
              darkMode ? "bg-[#2B2727]" : "bg-white"
            }`}
          >
            <div
              id="image"
              className="border-r border-[#D2D2D2] flex w-[360px] h-[360px]"
            >
              <img
                className="w-full h-full object-cover rounded-tl-[12px] rounded-bl-[12px]"
                src={project.projectimg}
                alt={project.title}
              />
            </div>
            <section>
              <div
                id="info"
                className=" flex flex-col gap-y-4 pl-8 w-[584px] h-[247px]"
              >
                <h2 id="subtitle"
                  className={`h-[32px] text-[32px] flex items-center ${
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
                <div className="flex gap-2 ">
                  {project.projectDetails?.technologies?.map((tech) => (
                    <span
                      className={`${
                        darkMode
                          ? "flex bg-[#8173DA] w-[98px] h-[31px]  rounded-[23px] text-white"
                          : "flex bg-[#4731D3] w-[88px] h-[31px]  rounded-[23px] text-white"
                      }`}
                      key={tech.id}
                    >
                      <p className="border border-[#4731D3] rounded-[23px] w-[100px] h-[31px] flex  justify-center">
                        {tech.name}
                      </p>
                    </span>
                  ))}
                </div>
                <nav className="font-inter font-medium text-[16px] flex gap-11 underline">
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
        {projects.filter(project => [2].includes(project.id)).map((project) => (
          <div
            key={project.id}
            className={` flex justify-between items-center ${
              darkMode ? "bg-[#2B2727]" : "bg-white"
            }`}
          >
            <div
              id="image"
              className="border-r border-[#D2D2D2] flex w-[360px] h-[360px]"
            >
              <img
                className="w-full h-full object-cover rounded-tl-[12px] rounded-bl-[12px]"
                src={project.projectimg}
                alt={project.title}
              />
            </div>
            <section>
              <div
                id="info"
                className=" flex flex-col gap-y-4 pl-8 w-[584px] h-[247px]"
              >
                <h2 id="subtitle"
                  className={`h-[32px] text-[32px] flex items-center ${
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
                <div className="flex gap-2 ">
                  {project.projectDetails?.technologies?.map((tech) => (
                    <span
                      className={`${
                        darkMode
                          ? "flex bg-[#8173DA] w-[98px] h-[31px]  rounded-[23px] text-white"
                          : "flex bg-[#4731D3] w-[88px] h-[31px]  rounded-[23px] text-white"
                      }`}
                      key={tech.id}
                    >
                      <p className="border border-[#4731D3] rounded-[23px] w-[100px] h-[31px] flex  justify-center">
                        {tech.name}
                      </p>
                    </span>
                  ))}
                </div>
                <nav className="font-inter font-medium text-[16px] flex gap-11 underline">
                  <a
                    href={""}
                    onClick={handleViewSiteLink}
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
              <Link className="flex justify-end text-[#4731D3] font-bold" to="/projects">view all projects</Link>
      </section>

    </div>
  );
}

{
  /* 

 <div
          id="pizzaproject"
          className="border border-red-600 flex justify-between items-center"
        >
          <div
            id="pizzaimage"
            className="border-r border-[#D2D2D2] flex w-[360px] h-[360px]"
          >
            <img
              className="w-full h-full object-cover rounded-tl-[12px] rounded-bl-[12px]"
              src={projectData.projectimg}
              alt="pizza"
            />
          </div>
          <section>
            <div
              id="pizzainfo"
              className="border flex flex-col border-blue-600 gap-y-4 pl-8 w-[584px] h-[247px]"
            >
              <h2 className="h-[32px] text-[32px] flex items-center border border-red-600">
                {projectData.subtitle}
              </h2>
              <p>{projectData.description}</p>
              <div className="flex gap-2 ">
                {techs.map((tech) => (
                  <span
                    className="flex bg-[#4731D3] w-[68px] h-[31px]  rounded-[23px] text-white"
                    key={tech.id}
                  >
                    <p className="border border-[#4731D3] rounded-[23px] w-[70px] h-[31px] flex  justify-center">
                      {tech.name}
                    </p>
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>



BURASI SON!!!


  
   <div id="filmproject">
          <section>
            <div id="filmimage">

            </div>
            <div id="filminfo" className="border border-blue-600 w-[960px] h-[375px]">
              <h2>Film Project</h2>
              <p>Technologies: HTML, CSS, JavaScript</p>
              
              </div>
          </section>

        </div>
  
  */
}
