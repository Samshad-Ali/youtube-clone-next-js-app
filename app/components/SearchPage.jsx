"use client"
import React from 'react'
import Header from './Header'
import LeftNav from './LeftNav'
import { useParams } from 'next/navigation'

const SearchPage = () => {
  const params = useParams();
  return (
    <>
    <Header/>
        <div className='h-[calc(100vh-56px)] w-full bg-black flex flex-row'>
          <LeftNav/>
          <div>
            searh page and id is {params.id}
          </div>
        </div>
    </>
  )
}

export default SearchPage