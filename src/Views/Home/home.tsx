import React, { useState } from 'react';
import style from './home.module.css';
import Presentation from '../../Components/Presentation/presentation';
import Proyects from '../../Components/Proyects/proyects';
import Tech from '../../Components/Techs/tech';
import Experience from '../../Components/Experience/experience';
import About from '../../Components/aboutMe/about';
const Home = () => {

  return (
    <div className={style.home}>
      <Presentation/>
      <Proyects/>
      <Tech/>
      <Experience/>
      <About/>
    </div>
  );
};

export default Home;
