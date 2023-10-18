import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaJava, FaHtml5, FaCss3} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiSqlite, SiVercel, SiVisualstudiocode} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Python: <FaPython/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Java : <FaJava/>,
        Html : <FaHtml5/>,
        Css : <FaCss3/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        VScode : < SiVisualstudiocode />,
        SQL : < SiSqlite/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
