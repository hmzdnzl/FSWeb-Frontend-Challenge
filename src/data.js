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
import filmproje from "./assets/projects/filmprojess.png"
import atsignlogo from "./assets/footer/at-sign-logo.png"
import codepenlogo from "./assets/footer/codepen-logo.png"
import instagramlogo from "./assets/footer/instagram-logo.png"
import twitterlogo from "./assets/footer/twitter-logo.png"
import atsignlogodark from "./assets/footer/at-sign-dark.png"
import codepenlogodark from "./assets/footer/codepen-dark.png"
import instagramlogodark from "./assets/footer/instagram-dark.png"
import twitterlogodark from "./assets/footer/twitter-dark.png"

export const data = {
en: { HeaderSection: [
    { name: "Hamza" },
    { title: "I am a Frontend Developer..." },
    {
      text: "If you want to craft solid and scalable frontend products, you are in true website.",
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
        ],
        viewSiteLink:"https://fsweb-s8-challenge-pizza-silk.vercel.app/",
        githubLink:"https://github.com/hmzdnzl/fsweb-s8-challenge-pizza"

      }
    },
    {
      id: 2,
      subtitle: "Redux Watchlist Solution",
      projectimg: filmproje,
      projectDetails: {
        description: `This website is about movie list. In this website, there are two movie lists. One of them is all movies list. Movies rendered one by one. You can use previous and next movie buttons for looking movies. And the other one is my movie list. You can add a movie to my movie list. When you add, the movie remove from all movies list. If you remove the movie from my movie list, the movie added all movies list. `,
        technologies: [
          { id: 1, name: "react" },
          { id: 2, name: "tailwind" },
          { id: 3, name: "axios" }
        ],
       viewSiteLink:"https://fsweb-s10g3-redux-watchlist-solutio-olive.vercel.app/",
        githubLink:"https://github.com/hmzdnzl/fsweb-s10g3-redux-watchlist-solution"
      }
    }
  ],
  FooterSection: {
    title:"Send me a message!",
    text: "Got a question or proposal, or just want to say hello? Go ahead.",
    mailAddress:"hmzdnzl38@gmail.com",
    connections: [
      {id:1, link:"https://x.com/Hamzade38", logo:twitterlogo, darkLogo:twitterlogodark},
      {id:2, link:"https://codepen.io/hamza-denizli",logo:codepenlogo, darkLogo:codepenlogodark},
      {id:3, link:"mailto:hmzdnzl38@gmail.com", logo:atsignlogo, darkLogo:atsignlogodark},
      {id:4, link:"https://www.instagram.com/hmzdnzl", logo:instagramlogo, darkLogo: instagramlogodark}
    ]
  }},
tr:{HeaderSection: [
    { name: "Hamza" },
    { title: "Bir Frontend Developerdan..." },
    {
      text: "If you want to craft solid and scalable frontend products, you are in true website.",
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
        ],
        viewSiteLink:"https://fsweb-s8-challenge-pizza-silk.vercel.app/",
        githubLink:"https://github.com/hmzdnzl/fsweb-s8-challenge-pizza"

      }
    },
    {
      id: 2,
      subtitle: "Redux Watchlist Solution",
      projectimg: filmproje,
      projectDetails: {
        description: `This website is about movie list. In this website, there are two movie lists. One of them is all movies list. Movies rendered one by one. You can use previous and next movie buttons for looking movies. And the other one is my movie list. You can add a movie to my movie list. When you add, the movie remove from all movies list. If you remove the movie from my movie list, the movie added all movies list. `,
        technologies: [
          { id: 1, name: "react" },
          { id: 2, name: "tailwind" },
          { id: 3, name: "axios" }
        ],
       viewSiteLink:"https://fsweb-s10g3-redux-watchlist-solutio-olive.vercel.app/",
        githubLink:"https://github.com/hmzdnzl/fsweb-s10g3-redux-watchlist-solution"
      }
    }
  ],
  FooterSection: {
    title:"Send me a message!",
    text: "Got a question or proposal, or just want to say hello? Go ahead.",
    mailAddress:"hmzdnzl38@gmail.com",
    connections: [
      {id:1, link:"https://x.com/Hamzade38", logo:twitterlogo, darkLogo:twitterlogodark},
      {id:2, link:"https://codepen.io/hamza-denizli",logo:codepenlogo, darkLogo:codepenlogodark},
      {id:3, link:"mailto:hmzdnzl38@gmail.com", logo:atsignlogo, darkLogo:atsignlogodark},
      {id:4, link:"https://www.instagram.com/hmzdnzl", logo:instagramlogo, darkLogo: instagramlogodark}
    ]}
}
}
