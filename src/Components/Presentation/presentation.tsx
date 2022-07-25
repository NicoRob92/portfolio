import React, { useState } from 'react';
import style from './presentation.module.css';
const Presentation = () => {

  return (
    <div className={style.container}>
      <div className={style.presentation} id='home'>
        <div className={style.box}>
          <h1>Nicolas Robledo<br/>
          Front End Developer</h1>
          <p>
           La gente raramente convierte su vida en un exito a menos que se divierta con lo que hace
          </p>
          <p> Y yo me estoy divirtiendo.</p>
        </div>
        
      </div>
    </div>
  );
};

export default Presentation;
