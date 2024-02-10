"use client"
import React, { useContext } from 'react'
import Header from './Header'
import LeftNav from './LeftNav'
import { youtubeContext } from '../context/contextWrapper'
import SearchResultVidoeCard from './SearchResultVidoeCard'
import useSearchPage from '../hooks/useSearchPage'
const SearchPage = () => {
  const {searchResults,loading} = useContext(youtubeContext);
  useSearchPage();
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