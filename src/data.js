import heroimg from "./assets/hero-right.png";
import Skills from "./components/Skills";
import figmalogo from "./assets/skills/figma-logo.png";
import jslogo from "./assets/skills/js-logo.png";
import reactlogo from "./assets/skills/react-logo.png";
import reduxlogo from "./assets/skills/redux-logo.png";
import nodelogo from "./assets/skills/node-logo.png";
import vscode from "./assets/skills/vscode-logo.png";
import profileimg from "./assets/profile/profile-img.png";
import pizzaproje from "./assets/projects/pizzaprojess.png";

export const data = {
  HeaderSection: [
    { name: "Hamza" },
    { title: "I am a Frontend Developer..." },
    {
      text: "...who likes to craft solid and scalable frontend products with great user experiences.",
    },
    { github: "https://github.com/hmzdnzl" },
    { linkedin: "https://www.linkedin.com/in/hmzdnzl/" },
    { img: heroimg },
  ],
  SkillsSection: [
    { title: "Skills" },
    { id: 1, name: "JAVASCRIPT", logo: jslogo },
    { id: 2, name: "REACT", logo: reactlogo },
    { id: 3, name: "REDUX", logo: reduxlogo },
    { id: 4, name: "NODE", logo: nodelogo },
    { id: 5, name: "VS CODE", logo: vscode },
    { id: 6, name: "FIGMA", logo: figmalogo },
  ],
  ProfileSection: [
    { title: "Profile" },
    { subtitle: "Basic Information" },
    { birthLabel: "Birth Date" },
    { birth: "15.12.1996" },
    { addressLabel: "Location" },
    { address: "İstanbul" },
    { educationLabel: "Education Status" },
    { education: "Erciyes Ünv. Çevre Müh. Lisans, 2022" },
    { preferredRoleLabel: "Preferred Role" },
    { preferredRole: "Frontend, UI" },
    { img: profileimg },
    {
      aboutme: [
        { title: "About Me" },
        {
          text1: `I graduated in 2022 and completed my military service. Then I worked as an environmental engineer for two and a half years.`,
          text2:
            "After resigning, I joined a six-month fullstack developer course. I’m now halfway through, done with frontend and starting backend soon.",
        },
      ],
    },
  ],

  ProjectsSection: [
    { id: 0, title: "Projects" },
    {
      id: 1,
      subtitle: "Teknolojik Yemekler",
      projectimg: pizzaproje,
      projectDetails: {
        description: `This website is about ordering pizza. In this website, you can select pizza size, pizza thickness and add materials. And then add your name and note. Price is changing according to chooses. Of course, some of form must be filled like pizza size etc. If you don't fill this parts, you can not give an order. In additional, I added technologies which I used in this project`,
        technologies: [
          { id: 1, name: "react" },
          { id: 2, name: "cypress" },
          { id: 3, name: "vercel" }
        ]
      }
    },
    {
      id: 2,
      subtitle: "Teknolojik",
      projectimg: pizzaproje,
      projectDetails: {
        description: `This website is about ordering pizza. In this website, you can select pizza size, pizza thickness and add materials. And then add your name and note. Price is changing according to chooses. Of course, some of form must be filled like pizza size etc. If you don't fill this parts, you can not give an order. In additional, I added technologies which I used in this project`,
        technologies: [
          { id: 1, name: "react" },
          { id: 2, name: "cypress" },
          { id: 3, name: "vercel" }
        ]
      }
    }
  ],
  FooterSection: {
    text: "© 2024 Tüm hakları saklıdır.",
  },
};
