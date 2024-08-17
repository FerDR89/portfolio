import React from "react";
import css from "./stack.css";
import StackCard from "components/molecules/stack-card/StackCard";
import Title from "components/molecules/title/Title";
import { useGetTechIcons } from "hooks/hooks";

const Stack = () => {
  const data = useGetTechIcons();
  return (
    <section className={css.root} id="stack">
      <Title section="stack" />
      <div className={css.container}>
        {data.map((item) => (
          <StackCard
            key={item.id}
            title={item.title}
            img={"https:" + item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Stack;
