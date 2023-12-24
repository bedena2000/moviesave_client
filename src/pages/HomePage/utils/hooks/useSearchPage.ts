import React, { useState } from "react";

export const useSearchPage = () => {

  const [ isActivated, setIsActivated ] = useState(false);

  return {
    isActivated,
    closeModal: setIsActivated
  };
  

};