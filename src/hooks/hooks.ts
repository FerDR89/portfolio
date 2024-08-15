import React, { useState, useEffect } from "react";
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

export { useGetProjectsData, useGetTechIcons, useGetExperience };
