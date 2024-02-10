import { useParams } from "next/navigation";
import { commonApi } from "../api/commonApi";
import { useContext, useEffect } from "react";
import { youtubeContext } from "../context/contextWrapper";
const useSearchPage = () => {
  const {setSearchResults,setLoading} = useContext(youtubeContext);
  const {id} = useParams();
    const fetchSelectedCategoryData = async () => {
        setLoading(true);
        commonApi(`search/?q=${id}`).then((res)=>{
          console.log(res?.data?.contents);
          setSearchResults(res?.data?.contents)
        }).catch((err=>console.log(err)))
        setLoading(false)
      }
      useEffect(()=>{
        fetchSelectedCategoryData(id)
      },[id])
  return {
  }
}

export default useSearchPage;