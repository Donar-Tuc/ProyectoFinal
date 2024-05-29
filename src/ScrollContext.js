// ScrollContext.js
import React, { createContext, useState, useContext } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <ScrollContext.Provider value={{ scrollPosition, setScrollPosition, page, setPage }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
