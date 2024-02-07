'use client'
import { useContext, useState } from "react";
import { youtubeContext } from "../context/contextWrapper";

const LeftNavMenuItem = ({title,icon,action,isActiveCategory}) => {
  const {toggleSideNav} = useContext(youtubeContext);
  return (
    <button className={`${isActiveCategory} flex items-center text-sm mb-[1px] font-roboto hover:bg-zinc-800 gap-5 rounded-md p-2`}
    onClick={action}
    >
      <span className=" text-lg">

      {icon}
      </span>
      {
        toggleSideNav &&
      <p>{ toggleSideNav ? title : '' }</p>
      }
    </button>
  )
}

export default LeftNavMenuItem