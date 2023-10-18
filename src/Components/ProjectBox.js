import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    WeatherDesc : "This website is a landing page of Weather forcast. Developed using CSS, JavaScript & React.js. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    WeatherGithub : "https://github.com/Padmavati39/weatherapp",
    WeatherWebsite : "https://weatherapp-two-sand.vercel.app/",

    TodoDesc : "This is a simple and elegant Todo List web app built using Tailwind CSS and JavaScript. The app allows users to create, manage, and save todos, all while enjoying a beautiful user interface design.",
    TodoGithub : "https://github.com/Padmavati39/To_Do_App",
    TodoWebsite : "https://padmavati39.github.io/To_Do_App/",

    PortfolioDesc:"You are currently on this website" ,
    PortfolioGithub:"",
    PortfolioWebsite:"https://newsletter-signup-teal.vercel.app/"
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox