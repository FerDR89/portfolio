import React from "react";
import css from "components/stack/stack.css";
import { StackCard } from "components/stack-card/StackCard";
import { useGetTechIcons } from "hooks/hooks";

export const Stack = () => {
  const data = useGetTechIcons();

  return (
    <article className={css.root}>
      <h2 className={css.subtitle}>Técnologías y herramientas</h2>
      <div className={css.container}>
        {data.map((item) => (
          <StackCard
            key={item.imageId}
            title={item.title}
            img={"https:" + item.image}
          />
        ))}
      </div>
    </article>
  );
};
