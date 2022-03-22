import React from "react";
import css from "components/stack/stack.css";
import { StackCard } from "components/stack-card/StackCard";
import ts from "../../assets/ts.svg";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import Css3 from "../../assets/css.png";
import html from "../../assets/html.png";
import js from "../../assets/js.svg";
import fs from "../../assets/fs.png";
import git from "../../assets/git.svg";
import heroku from "../../assets/heroku.png";
import postgre from "../../assets/postgre.svg";
import postman from "../../assets/postman.svg";
import express from "../../assets/express.png";
import sequelize from "../../assets/sequelize.png";

export const Stack = () => {
  return (
    <article className={css.root}>
      <h2 className={css.subtitle}>Técnologías y herramientas</h2>
      <div className={css.container}>
        <StackCard title="React JS" img={react} />
        <StackCard title="Node JS" img={node} />
        <StackCard title="TypeScript" img={ts} />
        <StackCard title="JavaScript" img={js} />
        <StackCard title="CSS" img={Css3} />
        <StackCard title="HTML" img={html} />
        <StackCard title="Express" img={express} />
        <StackCard title="Firebase" img={fs} />
        <StackCard title="PostgreSQL" img={postgre} />
        <StackCard title="Sequelize" img={sequelize} />
        <StackCard title="Git" img={git} />
        <StackCard title="Heroku" img={heroku} />
        <StackCard title="Postman" img={postman} />
      </div>
    </article>
  );
};
