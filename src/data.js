import heroimg from "./assets/hero-right.png";
import Skills from "./components/Skills";

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
    { id: 1, skill: "HTML", level: "Advanced" },
    { id: 2, skill: "CSS", level: "Intermediate" },
    { id: 3, skill: "JavaScript", level: "Advanced" },
    { id: 4, skill: "React", level: "Intermediate" }
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
