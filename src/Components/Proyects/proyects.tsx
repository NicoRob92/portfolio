import React, { useState } from 'react';
import style from './experience.module.css';
import { array } from '../../data/exp';
const Proyects = () => {
  const [image, setImage] = useState(0);
  const [exp, setExp] = useState(0);

  const imageButton = (id: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(id.currentTarget.id);
    setImage(Number(id.currentTarget.id));
  };

  const expButtonLeft = () => {
    if (exp > 0) {
      setExp(exp - 1);
      setImage(0);
    }
  };

  const expButtonRight = () => {
    if (exp === array.length - 1) {
      return;
    } else {
      setExp(exp + 1);
      setImage(0);
    }
  };

  return (
    <div className={style.container}>
      <div
        className={style.container1}
        style={{ backgroundImage: `url(${array[exp].images[0]})` }}>
        <div className={style.experience} id='proyects'>
          <h1>Estos son algunos de los proyectos en los que he trabajado</h1>
          <div className={style.slider}>
            <a href={`#exp${exp}`} onClick={(e) => expButtonLeft()}>
              <svg
                width='64'
                height='64'
                viewBox='0 0 64 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M31.9999 58.6666C46.7275 58.6666 58.6666 46.7276 58.6666 32C58.6666 17.2724 46.7275 5.33331 31.9999 5.33331C17.2723 5.33331 5.33325 17.2724 5.33325 32C5.33325 46.7276 17.2723 58.6666 31.9999 58.6666Z'
                  stroke='white'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M31.9999 21.3333L21.3333 32L31.9999 42.6666'
                  stroke='white'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M42.6666 32H21.3333'
                  stroke='white'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
            <div className={style.dc}>
            {array.map((e, i) => (
              <div id={`exp${i}`} className={style.descriptionContainer}>
                <div className={style.images}>
                  <img src={e.images[image]} alt='' />
                  <div className={style.buttons}>
                    {e.images.map((e, index) => (
                      <button id={`${index}`} onClick={(e) => imageButton(e)}>
                        <svg
                          width='10'
                          height='10'
                          viewBox='0 0 10 10'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <circle cx='5' cy='5' r='5' fill='#2F5271' />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <div className={style.description}>
                  <h1>{e.title}</h1>
                  <p>{e.description}</p>
                  <h3>Tareas</h3>
                  <p>{e.task}</p>
                  <div className={style.anchors}>
                    <h3>Links de la aplicacion</h3>
                    {e.links.map((e) => (
                      <a href={e}>{e}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            </div>
            <a href={`#exp${exp}`} onClick={(e) => expButtonRight()}>
              <svg
                width='64'
                height='64'
                viewBox='0 0 64 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M31.9999 58.6666C46.7275 58.6666 58.6666 46.7276 58.6666 32C58.6666 17.2724 46.7275 5.33331 31.9999 5.33331C17.2723 5.33331 5.33325 17.2724 5.33325 32C5.33325 46.7276 17.2723 58.6666 31.9999 58.6666Z'
                  stroke='white'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M32 42.6666L42.6667 32L32 21.3333'
                  stroke='white'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M21.3333 32H42.6666'
                  stroke='white'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
