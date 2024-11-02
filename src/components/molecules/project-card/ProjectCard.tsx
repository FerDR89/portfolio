import React, { useRef } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Icon from "components/atoms/icon/Icon";
import Text from "components/atoms/text/Text";
import MyButton from "components/atoms/my-button/MyButton";
import { useOberver } from "hooks/hooks";
import { repository } from "constants/constants";
import css from "./projectCard.css";

type PropsSearchResult = {
  title: string;
  img: string;
  linkRepo: string;
  description: string;
};

const ProjectCard = ({
  title,
  img,
  linkRepo,
  description,
}: PropsSearchResult) => {
  const containerEl = useRef<HTMLDivElement>(null);
  const inView: Boolean = useOberver(containerEl);

  return (
    <article className={`${inView ? css.root : css.noShow}`} ref={containerEl}>
      <div className={css.title_container}>
        <Text tag="text-bold" text={title} />
      </div>
      <div className={css.img_container}>
        <a
          href={linkRepo}
          target="_blank"
          aria-label="Link a repositorio de Github"
          className={css.link}
        >
          <img
            src={img}
            alt={"Vista previa del proyecto:" + title}
            className={css.project_img}
          />
        </a>
      </div>
      <div className={css.text_container}>
        <Text
          tag="text-body"
          text={description}
          customStyle={{ lineHeight: "1.4" }}
        />
      </div>
      <div className={css.button_container}>
        <a
          href={linkRepo}
          target="_blank"
          aria-label="Link a repositorio de Github"
          className={css.link}
        >
          <MyButton>
            <div className={css.icon_container}>
              <Icon name={faGithub} height="20px" width="20px" />
              <Text
                tag="text-body"
                text={repository}
                customStyle={{
                  fontSize: "0.85rem",
                }}
              />
            </div>
          </MyButton>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
