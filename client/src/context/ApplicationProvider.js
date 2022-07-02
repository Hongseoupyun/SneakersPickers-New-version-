import React, { useState } from "react";
import ApplicationContext from "./ApplicationContext";

const ApplicationProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ApplicationContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;
