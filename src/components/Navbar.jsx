import React from 'react'
import './Navbar.css'
import Logo from '../assets/logo no bg.png'
import Menu from '../assets/Menu.png'
import Close from '../assets/close.png'

function Navbar() {


  const smoothScroll = (targetPosition, duration) => {
    const startPosition = window.pageYOffset; 
    const distance = targetPosition - startPosition; 
    let startTime = null;
  
    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };
  
    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = easeInOutQuad(Math.min(timeElapsed / duration, 1));
  
      window.scrollTo(0, startPosition + distance * progress);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
  
    requestAnimationFrame(animation);
  };
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      smoothScroll(section.offsetTop, 1200); 
    }
  };
  function showSidebar() {
      const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }

    function hideSidebar() {
      const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }

  return (
    <>
    
      <ul className = 'sidebar'>
        <li onClick= {() => hideSidebar()} ><img src={Close} alt="menu" className='close' /></li>
        <li className = 'sidebarcategories' onClick={() => scrollToSection("home")} >Home</li>
        <li className = 'sidebarcategories' onClick={() => scrollToSection("projects")}>Projects</li>
        <li className = 'sidebarcategories' onClick={() => scrollToSection("profile")}>Profile</li>
       
      </ul> 

    <nav className = 'navbar z-999'>

       <img src={Logo} alt="Logo" className='logo'/>
        <ul className = 'list'>
        <li className = 'navbarcategories' onClick={() => scrollToSection("home")} >Home</li>
        <li className = 'navbarcategories' onClick={() => scrollToSection("projects")}>Projects</li>
        <li className = 'navbarcategories' onClick={() => scrollToSection("profile")}>Profile</li>
        <li  onClick= {() => showSidebar()}><img src={Menu} alt="menu" className='menu'/></li>
       </ul>
      
    </nav>
    </>
  )
}

export default Navbar;
