import heroimg from "./assets/hero-right.png";
import Skills from "./components/Skills";
import figmalogo from "./assets/skills/figma-logo.png"
import jslogo from "./assets/skills/js-logo.png"
import reactlogo from "./assets/skills/react-logo.png"
import reduxlogo from "./assets/skills/redux-logo.png"
import nodelogo from "./assets/skills/node-logo.png"
import vscode from "./assets/skills/vscode-logo.png"

export const data = { 
    HeaderSection: [
    { name: "Hamza" },
    { title: "I am a Frontend Developer..." },
    {text: "...who likes to craft solid and scalable frontend products with great user experiences." },
    { github: "https://github.com/hmzdnzl" },
    { linkedin: "https://www.linkedin.com/in/hmzdnzl/" },
    { img: heroimg }
], 
SkillsSection: [
    {title:"Skills"},
    { id: 1, name: "JAVASCRIPT", logo: jslogo },
    { id: 2, name: "REACT", logo: reactlogo },
    { id: 3, name: "REDUX", logo: reduxlogo },
    { id: 4, name: "NODE", logo: nodelogo },
    { id: 5, name: "VS CODE", logo: vscode },
    { id: 6, name: "FIGMA", logo: figmalogo }
],
ProfileSection: {
    name: "Ali Veli",
    title: "Frontend Developer"},
ProjectsSection: [
    { id: 1, title: "Proje 1", description: "Bu benim ilk projem." }],
FooterSection: {
    text: "© 2024 Tüm hakları saklıdır."
}
};
