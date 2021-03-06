import React, { useState } from "react";
import { useChangeNavColor } from "hooks/hooks";
import css from "components/burger-menu/burgerMenu.css";
import { MyButton } from "ui/link-button/LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function BurgerMenu() {
  const [status, setStatus] = useState("hamburger__close");
  const [showModal, setShowModal] = useState("hidden__modal");

  function handleClick() {
    //Forma resumida de esto status == "open" ? setStatus("close") : setStatus("open")
    setStatus(
      status == "hamburger__close" ? "hamburger__open" : "hamburger__close"
    );
    setShowModal(showModal == "show__modal" ? "hidden__modal" : "show__modal");
  }
  const navOption = useChangeNavColor();

  return (
    <article className={css.root}>
      <nav
        className={
          navOption ? `${css["nav"]} , ${css["nav-active"]} ` : css["nav"]
        }
      >
        {navOption ? <MyButton /> : <h2 className={css.logo}>FerDR89</h2>}
        <div
          className={css[status]}
          onClick={() => {
            handleClick();
          }}
        ></div>
        <div className={css[showModal]}>
          <ul className={css.list}>
            <li className={css.item}>
              <a
                href="#welcome"
                className={css.link}
                onClick={() => {
                  handleClick();
                }}
              >
                Home
              </a>
            </li>
            <li className={css.item}>
              <a
                href="#projects"
                className={css.link}
                onClick={() => {
                  handleClick();
                }}
              >
                Proyectos
              </a>
            </li>
            <li className={css.item}>
              <a
                href="#about-me"
                className={css.link}
                onClick={() => {
                  handleClick();
                }}
              >
                Acerca de m??
              </a>
            </li>
          </ul>
          <div className={css.social__container}>
            <div className={css.icon__container}>
              <a href="mailto:ferderow@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    width: "30px",
                    height: "40px",
                    color: "whitesmoke",
                  }}
                />
              </a>
            </div>
            <div className={css.icon__container}>
              <a
                href="https://www.linkedin.com/in/fernando-de-row/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{
                    width: "30px",
                    height: "40px",
                    color: "whitesmoke",
                  }}
                />
              </a>
            </div>
            <div className={css.icon__container}>
              <a href="https://github.com/FerDR89" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "whitesmoke",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </article>
  );
}

export { BurgerMenu };
