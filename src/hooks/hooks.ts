import React, { useState, useEffect, RefObject } from "react";
import {
  fetchExperience,
  fetchProjectsData,
  fetchTechnologiesIcons,
} from "lib/API/API";

function useGetProjectsData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchProjectsData().then((data) => {
      if (data) {
        setData(data);
      }
    });
  }, []);
  return data;
}

function useGetTechIcons() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchTechnologiesIcons().then((data) => {
      if (data) {
        setData(data);
      }
    });
  }, []);
  return data;
}

function useGetExperience() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchExperience().then((data) => {
      if (data) {
        setData(data);
      }
    });
  }, []);
  return data;
}

function useOberver(refEl: RefObject<HTMLElement>, options = {}) {
  const [inView, setInView] = useState<Boolean>(false);

  const callback = (entry) => {
    if (entry[0].isIntersecting) {
      setInView(entry[0].isIntersecting);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(refEl.current);
    return () => observer.disconnect();
  }, []);

  return inView;
}

export { useGetProjectsData, useGetTechIcons, useGetExperience, useOberver };
