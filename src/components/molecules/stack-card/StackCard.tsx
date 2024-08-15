import React from "react";
import css from "./stackCard.css";

type PropsSearchResult = {
  title: string;
  img: any;
};

function StackCard(props: PropsSearchResult) {
  const { title, img } = props;
  return (
    <article className={css.container}>
      <div className={css.img__container}>
        <img src={img} alt={"Icono de:" + title} className={css.img} />
      </div>
      <div className={css.title__container}>
        <p className={css.title}>{title}</p>
      </div>
    </article>
  );
}

export { StackCard };
