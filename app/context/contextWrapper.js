"use client";
import { createContext, useEffect, useState } from "react";
import { commonApi } from "../api/commonApi";

export const youtubeContext = createContext({});

const ContextWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [toggleSideNav,setToggleSideNav]=useState(true)
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategory, setSelectCategory] = useState('New');
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <youtubeContext.Provider
      value={{
        loading,
        setLoading,
        toggleSideNav,
        setToggleSideNav,
        searchResults,
        setSearchResults,
        selectCategory,
        setSelectCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </youtubeContext.Provider>
  );
};

export default ContextWrapper;
