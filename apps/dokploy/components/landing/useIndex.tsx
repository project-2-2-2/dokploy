import React from "react";
import { useState, useEffect } from "react";

const useIndex = ({ length = 5, time = 1000 }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (length === 0) return;
    let timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, time);
    return () => clearInterval(timer);
  }, [length, time]);
  return index;
};

export default useIndex;
