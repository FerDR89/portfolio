import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
  name: IconProp;
  width: string;
  height: string;
  color?: string;
}

const Icon = ({ name, width, height, color = "#FFF" }: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={name}
      style={{
        width,
        height,
        color,
      }}
    />
  );
};

export default Icon;
