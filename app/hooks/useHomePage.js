import { useContext, useEffect } from "react";
import { commonApi } from "../api/commonApi";
import { youtubeContext } from "../context/contextWrapper";

const useHomePage = ()=>{
    const {
        setSearchResults,
        setLoading,
        selectCategory,
      } = useContext(youtubeContext);
    const fetchSelectedCategoryData = async (query) => {
        setLoading(true);
        commonApi(`search/?q=${query}`).then((res) => {
          setSearchResults(res?.data?.contents);
        })
        setLoading(false);
      };
      useEffect(() => {
        fetchSelectedCategoryData(selectCategory);
      }, [selectCategory]);
    return{
        
    }
}

export default useHomePage;