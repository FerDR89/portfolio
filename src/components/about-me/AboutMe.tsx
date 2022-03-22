import React from "react";
import css from "components/about-me/about.css";

export const AboutMe = () => {
  return (
    <article id="about-me" className={css.root}>
      <h2 className={css.subtitle}>Sobre mí</h2>
      <div className={css.container}>
        <div className={css.animation__container}>
          <iframe
            className={css.animation}
            src="https://embed.lottiefiles.com/animation/63487"
          ></iframe>
        </div>
        <div className={css.parragraph__container}>
          <p className={css.parragraph}>
            Soy una persona curiosa, me gusta estar en continuo aprendizaje y
            encarando nuevos desafíos.
          </p>
          <p className={css.parragraph}>
            A fines del 2020, cansado un poco de la rutina, decidí salir de mi
            zona de confort y comencé a buscar un nuevo enfoque en mi carrera
            profesional.
          </p>
          <p className={css.parragraph}>
            Empece de manera autodidacta a investigar de que se trataba, seguir
            algunos tutoriales y leer documentación para luego anotarme en una
            carrera FullStack.
          </p>
          <p className={css.parragraph}>
            En la actualidad me encuentro apuntando toda mi energía y esfuerzos
            para perfeccionarme en adquirir la mayor cantidad de
            conocimiento/práctica posible y conseguir mi primer empleo como
            desarrollador.
          </p>
        </div>
      </div>
    </article>
  );
};
