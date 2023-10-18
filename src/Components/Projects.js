import React from 'react';
import ProjectBox from './ProjectBox';
import WeatherImage from '../images/WeatherImage.png';
import TodoImage from '../images/TodoImage.png';
import PortfolioImage from '../images/PortfolioImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={TodoImage} projectName="Todo" />
        <ProjectBox projectPhoto={WeatherImage} projectName="Weather" />
        <ProjectBox projectPhoto={PortfolioImage} projectName="Portfolio"/>
      </div>

    </div>
  )
}

export default Projects