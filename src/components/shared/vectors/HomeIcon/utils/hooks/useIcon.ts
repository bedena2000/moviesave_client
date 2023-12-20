import React, { useState } from "react";

const useIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return {
    isHovered,
    changeHover: setIsHovered,
  };
};

export default useIcon;
