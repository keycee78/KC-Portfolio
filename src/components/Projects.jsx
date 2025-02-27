import React, { useState } from 'react'; 
import './Projects.css';
import Card1 from '../assets/Card1.png';
import Card2 from '../assets/Card2.png';
import Card3 from '../assets/Card3.png';
import Card4 from '../assets/Card4.png';
import { Slide, Fade } from "react-awesome-reveal";

const CardsData = [
  { id: 1, img: Card4, title: "Personal Portfolio", desc: "Developed and deployed using HTML, TailwindCSS and REACTJS...", link: "https://www.figma.com/design/rPZUNPF4s8jZI2hbv4ezeB/Untitled?node-id=0-1&p=f&t=Z89eg6Dao1Ck4mYi-0" },
  { id: 2, img: Card1, title: "Ui/Ux Capstone Project", desc: "Designed and Prototyped using Figma and Photoshop", link: "https://aeonsphotobooth.jebsdev.solutions/" },
  { id: 3, img: Card2, title: "Ui/Ux School Project", desc: "Designed and Prototyped using Figma and Photoshop", link: "https://jai-xyz.github.io/menu4you/#" },
  { id: 4, img: Card3, title: "Java GUI School Project", desc: "GUI Integration: Utilizes Java Swing or JavaFX...", link: "https://github.com/keycee78/Java-GUI/tree/master/src/bmicalcu" },
];

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id); // Toggle overlay
  };

  return (
    <div className="container mx-auto pt-5">
      <div className="headline">
        <h1 className="text-center text-[#252525] font-bold text-4xl sm:text-5xl md:text-6xl mb-5 sm:mt-10 pt-10 ml-4 sm:ml-7 md:text-left">Recent Projects</h1>
        <p className="text-center text-[#252525] text-base sm:text-lg md:text-xl mb-10 ml-4 sm:ml-7 md:text-left">
          College Level Projects, Capstone and Personal Project
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-2 pb-20">
        {CardsData.map(({ id, img, title, desc, link }) => (
          <div
            key={id}
            className="text-white shadow-md rounded-lg overflow-hidden relative group transform scale-100 translate-y-0 hover:scale-105 hover:-translate-y-2 transition-all duration-300"
            onClick={() => handleCardClick(id)}
          >
            <img src={img} alt="" className="w-full max-w-[350px] h-[500px] rounded-lg" />
            <div className={`absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-4
            ${activeCard === id ? "opacity-100" : ""}`}>
              <div className="flex flex-col items-start text-left space-y-2 absolute bottom-4 left-4 w-full">
                <Slide cascade>
                  <Fade cascade damping={0.05}>
                    <p className="text-sm max-w-[300px] break-words">{desc}</p>
                  </Fade>
                  <a href={link} target='blank' rel="noopener noreferrer">
                    <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 duration-300 self-start cursor-pointer">
                      VIEW
                    </button>
                  </a>
                  <h1 className="text-xl font-bold">{title}</h1>
                </Slide>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
