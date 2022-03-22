import React, { useState, useEffect } from "react";
import { fetchProjectsData } from "lib/API/API";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);

  return windowSize <= 768 ? true : false;
}

function useChangeNavColor() {
  const [navOption, setNavOption] = useState(false);
  function changeNavColor() {
    if (window.scrollY > 60) {
      setNavOption(true);
    } else {
      setNavOption(false);
    }
  }
  window.addEventListener("scroll", changeNavColor);
  return navOption;
}

function projectsData() {
  const [data, setData] = useState([] as any);
  useEffect(() => {
    fetchProjectsData().then((data) => {
      if (data) {
        setData(data);
      }
    });
  }, []);
  return data;
}

export { useWindowSize, useChangeNavColor, projectsData };
