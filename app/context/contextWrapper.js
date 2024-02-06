"use client";
import { createContext, useEffect, useState } from "react";
import { fetchingApi } from "../api/rapidApi";

export const youtubeContext = createContext({});

const ContextWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategory, setSelectCategory] = useState('New');
  const [mobileMenu, setMobileMenu] = useState(false);

  const fetchSelectedCategoryData = async (query) => {
    setLoading(true);
    fetchingApi(`search/?q=${query}`).then(({contents})=>{
        console.log(contents);
        setSearchResults(contents)
        setLoading(false);
    })
  };

  // useEffect(()=>{
  //   fetchSelectedCategoryData(selectCategory)
  // },[selectCategory])

  return (
    <youtubeContext.Provider
      value={{
        loading,
        setLoading,
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
