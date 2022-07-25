import React from 'react';
import style from './experience.module.css';
const Experience = () => {
  return (
    <div className={style.container} id='experience'>
      <div className={style.exp}>
      <h2>Experiencias It</h2>
      <h3>Nanolancer 2022 ( Aun trabajando )</h3>
      <p>
        Me desempeno como desarrollador full stack, mayormente trabajando en el
        area del front,tambien realizo tareas como tester QA.
      </p>
      <h3>It-Techgroup 2022</h3>
      <p>
        En esta empresa realice una pasantia de 3 meses, como desarrollador web.
        Trabajando en un equipo de 5 personas, en el que era encargado de
        desarrollar paginas web y realizar mantenimiento a distintos proyectos
        que ya estaban deployados, la mayoria con Wordpress o CMS silimilares.
      </p>

      <h2>Experiencia Academica</h2>
      <h3>Henry Bootcamp 2021</h3>
      <p>
        Henry es un bootcamp muy intenso de mas de 800hs en el que desarrolle
        mis habilidades como programador, me consolide como autodidacta y mis
        habilidades de lider mejoraron. Trabaje en varios proyectos con
        metodologia Scrum, y logre finalizarlo de manera exitosa!
      </p>

      <h2>Otras Experiencias</h2>

      <h3>Delivery de PedidosYa 2020-2021</h3>
      <h3>Mantenimiento de consorcios ( Albanileria,plomeria y pintura ) 2017-2022</h3>
      <h3>Cadete repartidor para el transporte "La Sevillanita" 2018</h3>
      <h3>Operario en fabrica de zapatos "El Dante" 2015</h3>
      </div>
    </div>
  );
};

export default Experience;
