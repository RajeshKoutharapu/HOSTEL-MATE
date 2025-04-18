// src/context/OwnerContext.js
import { createContext, useContext, useState } from 'react';

const OwnerContext = createContext();

export const OwnerProvider = ({ children }) => {
  const [ownerData, setOwnerData] = useState({
    hostelName: '',
    email: ''
  });

  return (
    <OwnerContext.Provider value={{ ownerData, setOwnerData }}>
      {children}
    </OwnerContext.Provider>
  );
};

export const useOwner = () => useContext(OwnerContext);
