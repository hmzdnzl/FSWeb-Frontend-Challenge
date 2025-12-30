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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';




function App() {
  const { darkMode } = useContext(GlobalContext);

  return (
    <Router>
      <div className={`flex flex-col items-center ${darkMode ? "bg-black" : ""}`}>
        <ToastContainer />
        
        <Switch>
          <Route exact path="/">
            <>
            <Header />
              <Skills />
              <Profile />
              <Projects />
            </>
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App
