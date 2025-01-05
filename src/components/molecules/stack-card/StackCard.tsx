import React, { useRef } from "react";
import css from "./stackCard.css";
import Text from "components/atoms/text/Text";
import { stackHoverBackground } from "constants/constants";

type PropsSearchResult = {
  title: string;
  img: any;
};

const StackCard = ({ title, img }: PropsSearchResult) => {
  const hoverRef = useRef(null);

  const mouseOver = (event) => {
    event.preventDefault();
    hoverRef.current.style[
      "box-shadow"
    ] = `3px 3px 10px ${stackHoverBackground[title]}`;
  };

  const mouseOut = (event) => {
    event.preventDefault();
    hoverRef.current.style["box-shadow"] = "1px 1px 10px rgb(40, 59, 115) ";
  };

  return (
    <div
      className={css.container}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      ref={hoverRef}
    >
      <div className={css.img_container}>
        <img
          src={img}
          alt={"Icono de: " + title}
          className={css.img}
          loading="lazy"
        />
      </div>
      <div className={css.title_container}>
        <Text
          tag="text-bold"
          text={title}
          customStyle={{ fontSize: "0.85rem" }}
        />
      </div>
    </div>
  );
};

export default StackCard;
