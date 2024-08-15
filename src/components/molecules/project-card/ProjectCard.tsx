import React from "react";
import Text from "components/atoms/text/Text";
import MyButton from "components/atoms/my-button/MyButton";
import css from "./projectCard.css";

type PropsSearchResult = {
  title: string;
  img: any;
  linkDeploy: string;
  linkRepo: string;
};

function ProjectCard(props: PropsSearchResult) {
  const { title, img, linkDeploy, linkRepo } = props;
  return (
    <article className={css.container}>
      <div className={css["title-container"]}>
        <Text tag="text-bold" text={title} />
      </div>
      <div className={css["img-container"]}>
        <a
          href={linkDeploy}
          target="_blank"
          aria-label="Link a demo"
          className={css.link}
        >
          <img
            src={img}
            alt={"Vista previa del proyecto:" + title}
            className={css.project__img}
          />
        </a>
      </div>
      <div className={css["icons-container"]}>
        <a
          href={linkDeploy}
          target="_blank"
          aria-label="Link a demo"
          className={css.link}
        >
          <MyButton>Demo</MyButton>
        </a>
        <a
          href={linkRepo}
          target="_blank"
          aria-label="Link a repositorio de Github"
          className={css.link}
        >
          <MyButton>Repo</MyButton>
        </a>
      </div>
    </article>
  );
}

export { ProjectCard };
