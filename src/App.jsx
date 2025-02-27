import Navbar from './components/Navbar.jsx'
import Landing from './components/Landing.jsx'
import Projects from './components/Projects.jsx'
import Profile from './components/Profile.jsx'
import Footer from './components/Footer.jsx'

import './App.css'

function App() {

  return (
    <>
    <div className='website'>
          <div >
            <Navbar/>
          </div>
          <div id='home'>
            <Landing/>
          </div>
          <div id='projects'>
            <Projects/>
          </div>
          <div id='profile'>
            <Profile/>
          </div>
          <div>
            <Footer/>
          </div>
       
    </div>
    </>
  )
}

export default App
