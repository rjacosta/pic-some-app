import { useState, useEffect, useRef } from "react";

const useHover = () => {
  const [hovering, setHovered] = useState(false);

  const enter = () => {
    setHovered(true);
  };
  const leave = () => {
    setHovered(false);
  };

  const hoverRef = useRef(null);
  useEffect(() => {
    const node = hoverRef.current;
    node.addEventListener("mouseenter", enter);
    node.addEventListener("mouseleave", leave);

    return () => {
      node.removeEventListener("mouseenter", enter);
      node.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hovering, hoverRef];
};

export default useHover;
