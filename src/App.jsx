import { useState } from 'react'
import Header from './components/Header'
import Skills from "./components/Skills"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Footer from "./components/Footer"



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center'>
    <Header/>
    <Skills/>
    <Profile/>
    <Projects/>
    <Footer/>


    
      
      
    </div>
  )
}

export default App
