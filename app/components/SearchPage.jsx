"use client"
import { useParams } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import Header from './Header'
import LeftNav from './LeftNav'
import { youtubeContext } from '../context/contextWrapper'
import { commonApi } from '../api/commonApi'
import SearchResultVidoeCard from './SearchResultVidoeCard'
const SearchPage = () => {
  const {id} = useParams();
  const {searchResults,setSearchResults,setLoading,loading} = useContext(youtubeContext);
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
  return (
    <>
    <Header/>
        <div className='h-[calc(100vh-56px)] w-full bg-black flex flex-row'>
          <LeftNav/>
          <div className='flex-1 flex flex-col gap-2 p-2 sm:p-4 overflow-y-auto'>
            {
              !loading && searchResults?.length>0 &&  searchResults.map((item)=>{
                if(item?.type==='video') return <SearchResultVidoeCard
                key={item?.video?.videoId}
                video={item?.video}
                />
              })
            }
           
          </div>
        </div>
    </>
  )
}

export default SearchPage