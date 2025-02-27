import React from 'react'
import email from "../assets/Email.png"
import socials from "../assets/Geography.png"
import git from "../assets/GitHub.png"
import phone from "../assets/Phone.png"
import buttonLeft from "../assets/back.png"
import buttonRight from "../assets/next.png"
import certificate1 from "../assets/AiCertificate.png"
import sample from "../assets/sample.png"


import {useState} from "react"

import "./Profile.css"


function Profile() {
  const [toggle, setToggle] = useState(1)

  function updateToggle(id){
    setToggle(id)
  }
  
  const [slide, setSlide] = useState(1);

function prevSlide() {
  if (slide > 1) {
    setSlide(slide - 1); 
  }
}

function nextSlide() {
  if (slide < 2) {
    setSlide(slide + 1);
  }
}
  return (
    <>
 <div className="pt-30">
  <ul className="flex flex-wrap md:flex-nowrap justify-center gap-4 cursor-pointer">
    
    <button className=" rounded-md border border-[#b32d2d] mt-4 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#b32d2d]
     hover:text-white hover:bg-[#b32d2d] hover:border-[#b32d2d] focus:text-white focus:bg-[#b32d2d] focus:border-[#b32d2d] active:border-[#b32d2d] 
     active:text-white active:bg-[#C20000] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={()=>updateToggle(1)}>
      <li className="text-lg">ABOUT ME</li>
    </button>

    <button className="rounded-md border border-[#4a8a37] py-2 mt-4 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#4a8a37]
     hover:text-white hover:bg-[#4a8a37] hover:border-[#4a8a37] focus:text-white focus:bg-[#4a8a37] focus:border-[#4a8a37] active:border-[#4a8a37] 
     active:text-white active:bg-[#4a8a37] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={()=>updateToggle(2)}>
      <li className="text-lg">EDUCATION</li>
    </button>

    <button className="rounded-md border border-[#E58E00] py-2 mt-4 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#E58E00]
     hover:text-white hover:bg-[#E58E00] hover:border-[#E58E00] focus:text-white focus:bg-[#E58E00] focus:border-[#E58E00] active:border-[#E58E00] 
     active:text-white active:bg-[#E58E00] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={()=>updateToggle(3)}>
      <li className="text-lg">CONTACT ME</li>
    </button>

    <button className="rounded-md border border-[#0352AD] py-2 mt-4 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#0352AD]
     hover:text-white hover:bg-[#0352AD] hover:border-[#0352AD] focus:text-white focus:bg-[#0352AD] focus:border-[#0352AD] active:border-[#0352AD] 
     active:text-white active:bg-[#0352AD] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={()=>updateToggle(4)}>
      <li className="text-lg">CERTIFICATE</li>
    </button>

  </ul>
</div>
<div className={toggle == 1 ? "showContent" : "Content"}>
  <div className="container mx-auto max-w-screen-md px-6 lg:px-20 pb-20">
    <h1 className="text-center sm:text-left text-[#252525] font-bold text-xl lg:text-2xl mb-1 sm:mt-0 pt-13">Kerwin Sta. Maria Cortina</h1>
    <h4 className="text-center sm:text-left text-[#252525] font-bold text-sm lg:text-base mb-5 sm:mt-0">22 Years Old | Dasmariñas City, Cavite</h4>
    <p className="text-justify text-[#252525] mb-10 mt-0 text-sm lg:text-base leading-relaxed">
      I am currently studying for a <span className='font-bold'>Bachelor of Science in Information Technology </span> at Cavite State University - 
      Silang Campus and will graduate in September 2025.<br/><br/>
      My passion for coding started in senior high school when I realized that I could understand programming concepts quickly and complete coding tasks faster than my classmates. This made me enjoy coding even more.<br/><br/>
      At the same time, I also developed an interest in design. Many of my friends and classmates have complimented my work, which motivated me to continue improving my skills. Because of this, I became more confident that coding and design are the right fields for me.<br/><br/>
      With my skills in both coding and design, I am excited to explore opportunities where I can apply my creativity and technical knowledge to build useful and visually appealing digital solutions.
    </p>
  </div>
</div>
<div className={toggle == 2 ? "showContent" : "Content"}>
  <div className="College">
    <div className="container mx-auto max-w-screen-md px-6 lg:px-20 pt-20">
      <div className="border-y border-gray-300">
        <h1 className="text-left text-[#252525] font-bold text-xl lg:text-2xl mb-1 pt-4">College</h1>
        <h4 className="text-left text-[#252525] font-bold text-sm lg:text-base mb-2">Bachelor of Science in Information Technology</h4>
        <p className="text-justify text-[#252525] mb-5 text-sm lg:text-base">Cavite State University - Silang Campus</p>
        <p className="text-justify text-[#252525] mb-10 text-sm lg:text-base font-light italic">
          Relevant Coursework - Object Oriented Programming (C++, Java, Python, PHP), 
          Web Development, Database Management, Data Structure, System Analysis and Design, Software Development
        </p>
        <p className="text-left text-[#252525] text-sm lg:text-base font-bold italic pb-4">Sept 2021 - Present</p>
      </div>
    </div>
  </div>

  <div className="Shs">
    <div className="container mx-auto max-w-screen-md px-6 lg:px-20">
      <h1 className="text-left text-[#252525] font-bold text-xl lg:text-2xl mb-1 pt-4">Senior High School</h1>
      <h4 className="text-left text-[#252525] font-bold text-sm lg:text-base mb-2">TVL - Information and Communication Technology</h4>
      <p className="text-justify text-[#252525] mb-10 text-sm lg:text-base">Philippine Christian University - Dasmarinas</p>
      <p className="text-left text-[#252525] text-sm lg:text-base font-bold italic pb-4">2019 - 2021</p>
    </div>
  </div>

  <div className="Jhs">
    <div className="container mx-auto max-w-screen-md px-6 lg:px-20 pb-10">
      <div className="border-y border-gray-300">
        <h1 className="text-left text-[#252525] font-bold text-xl lg:text-2xl mb-1 pt-4">Junior High School</h1>
        <p className="text-justify text-[#252525] mb-10 text-sm lg:text-base">Dasmarinas East Integrated High School</p>
        <p className="text-left text-[#252525] text-sm lg:text-base font-bold italic">2015 - 2019</p>
      </div>
    </div>
  </div>
</div>
<div className={toggle == 3 ? "showContent" : "Content"}>
  <div className="container mx-auto max-w-screen-md px-6 lg:px-20 py-20">
    <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
      <div className="space-y-10 w-full">
        <div className="flex items-start space-x-5">
          <img src={email} alt="Email" className="w-10 h-12" />
         <div >
            <p className="font-bold ">Email:</p>
            <a href="mailto:kerwin.cortina@yahoo.com" className='underline'>kerwin.cortina@yahoo.com</a> <br />
            <a href="mailto:kerwin.c78@gmail.com" className='underline'>kerwin.c78@gmail.com</a>
          </div>
        </div>

        <div className="flex items-start space-x-5">
          <img src={phone} alt="Phone" className="w-10 h-12" />
          <div>
            <p className="font-bold">Phone Number:</p>
            <a href="">+63 915 978 6249</a> <br />
            <a href="">+63 992 788 7985</a>
          </div>
        </div>

        <div className="flex items-start space-x-5">
          <img src={git} alt="Github" className="w-12 h-12" />
          <div>
            <p className="font-bold">GitHub:</p>
            <a href="https://github.com/keycee78" className='underline' target="_blank" >https://github.com/keycee78</a>
          </div>
        </div>

        <div className="flex items-start space-x-5 mb-10">
          <img src={socials} alt="Social Media" className="w-12 h-14" />
          <div>
            <p className="font-bold">Social Media:</p>
            <a href="https://www.facebook.com/keyceeeeezz" className='underline' target="_blank">facebook.com/keyceeeeezz</a> <br />
            <a href="https://www.instagram.com/keycceez/?hl=en"  className='underline' target="_blank">instagram.com/keycceez/?hl=en</a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-auto text-center md:text-left mt-10 md:mt-40 md:ml-10">
              <a
         href="/Kerwin_Cortina_Resume.pdf" 
          download="Kerwin_Cortina_Resume.pdf" 
          className="py-4 px-10 text-[#252525] bg-gradient-to-r from-[#DBD6D6] via-white-500 to-[#E58E00] 
          hover:bg-gradient-to-br shadow-lg shadow-[#E58E00]/50 dark:shadow-lg dark:shadow-yellow-800/80 
          font-bold rounded-lg text-[15px] text-center w-full md:w-auto inline-block"
        >
          My Resume
        </a>

      </div>
    </div>
  </div>
</div>

<div className={`${toggle === 4 ? "block" : "hidden"}`}>
        <div className="container mx-auto px-5 md:px-40 py-10 text-center">
          {[certificate1, sample ].map((img, idx) => (
            <img key={idx} src={img} alt="certificate" className={`${slide === idx + 1 ? "block mx-auto" : "hidden"}`} />
          ))}
          <div className="flex justify-center space-x-5 mt-5">
            <img src={buttonLeft} alt="prev" className='w-10 h-10 cursor-pointer animate-bounce' onClick={prevSlide} />
            <img src={buttonRight} alt="next" className='w-10 h-10 cursor-pointer animate-bounce' onClick={nextSlide} />
          </div>
        </div>
      </div>
     </>
  )
}

export default Profile