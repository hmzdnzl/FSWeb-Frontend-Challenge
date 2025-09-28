import { useState } from 'react'
import Header from './components/Header'
import Skills from "./components/Skills"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
 const { darkMode} = useContext(GlobalContext);

  return (
    <div className={`flex flex-col items-center ${darkMode ? "bg-black" : ""}`}>
      <ToastContainer />
    <Header/>
    <Skills/>
    <Profile/>
    <Projects/>
    <Footer/>             
    </div>
  )
}

export default App
