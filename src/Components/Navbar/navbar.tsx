import React from 'react'
import style from './navbar.module.css'
const navbar = () => {
  return (
    <div className={style.anchors}>
    <a href='#home'>Home</a>
    <a href='#proyects'>
      Proyectos
    </a>
    <a href='#tech'>Tecnologias</a>
    <a href='#experience'>Experiencias</a>
    <a href='#about'>Quien soy?</a>


  </div>
  )
}

export default navbar