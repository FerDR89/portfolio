import React from "react";
import css from "./stack.css";
import { StackCard } from "components/molecules/stack-card/StackCard";
import { useGetTechIcons } from "hooks/hooks";

export const Stack = () => {
  const data = useGetTechIcons();

  return (
    <section className={css.root}>
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
    </section>
  );
};
