import React from 'react';
import style from './tech.module.css';
import { techs } from '../../data/tecnologias';
const Tech = () => {
  return (
    <div className={style.container}>
      <div id='tech' className={style.tech}>
        <h1>Estas son algunas de las tecnologias con las que he trabajado</h1>
        <div className={style.list}>
          {techs.map((e) => (
            <div className={style.card} style={{ color: e.color }}>
              <img className={style.image} src={e.image} alt='' />
              <h1>{e.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
