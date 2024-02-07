'use client';
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { TbVideoPlus } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import React, { useContext, useState } from "react";
import { youtubeContext } from "../context/contextWrapper";
import ytLogo from '../assets/yt-logo.png';
import ytLogoMobile from '../assets/yt-logo-mobile.png'
import profilePhoto from '../assets/unnamed.jpg'
import { useRouter } from 'next/navigation';
import Loader from '../shared/Loader';
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading,setToggleSideNav,toggleSideNav, mobileMenu, setMobileMenu } = useContext(youtubeContext);
  const router = useRouter();
  const searchQueryHandler=(e)=>{
    if((e.key==='Enter') && searchQuery?.length>0){
      router.push(`/search/${searchQuery}`)
    }
  }
  const searchBtnHandler=()=>{
    if(searchQuery?.length>0){
      router.push(`/search/${searchQuery}`)
    }
  }
  const mobileMenuToggle=()=>{
    setMobileMenu(!mobileMenu)
    setToggleSideNav(true)
  }
  return (
    <nav className="bg-primaryClr w-full h-14 gap-4 flex items-center justify-between p-2 px-4 sticky top-0 z-50">
      {
        loading && <Loader/>
      }
    <div className=" flex items-center gap-2">
      <button className="hidden md:block text-2xl hover:bg-zinc-800 rounded-full p-2"
      onClick={()=>{setToggleSideNav(!toggleSideNav)}}
      >
        <RxHamburgerMenu />
      </button>
      <button className="md:hidden text-2xl hover:bg-zinc-800 rounded-full p-2"
      onClick={mobileMenuToggle}
      >
        <RxHamburgerMenu />
      </button>
      <Link href={'/'} className="flex items-center gap-1">
        <Image className='hidden md:dark:block' width={'100'} src={ytLogo} alt="youtube-logo" />
        <Image className='md:hidden' width={'30'} src={ytLogoMobile} alt="youtube-logo" />
      </Link>
    </div>
    <div className="flex-1  md:flex-none md:w-[55%] flex items-center justify-center gap-2">
      <div className=" md:w-[95%] flex items-center justify-between gap-2 border border-zinc-800 rounded-full bg-zinc-900 bg-opacity-50">
          <input type="search"
          placeholder="Search"
          onChange={(e)=>{setSearchQuery(e.target.value)}}
          onKeyUp={searchQueryHandler}
          value={searchQuery}
          className="w-full sm:[95%] md:flex-1 p-2 placeholder:text-zinc-400 placeholder:font-roboto tracking-wider bg-transparent rounded-full outline-none pl-3 md:pl-6"
          />
          <button
          onClick={searchBtnHandler}
          className="text-2xl bg-zinc-800 p-2 px-4 sm:px-6 rounded-r-full border-l border-zinc-800 h-full">
              <IoSearchOutline/>
          </button>
      </div>
     <button className="hidden md:block bg-zinc-800 hover:bg-zinc-700 hover:bg-opacity-70 rounded-full p-2 text-2xl">
      <MdKeyboardVoice/>
     </button>
    </div>
    <div className="flex items-center gap-3">
      <button className="text-2xl hidden md:block hover:bg-zinc-800 p-2 rounded-full">
          <TbVideoPlus/>
      </button>
      <button className="text-2xl hidden md:block hover:bg-zinc-800 p-2 rounded-full"> <IoMdNotificationsOutline/> </button>
      <div className="w-10 hidden sm:block rounded-full">
          <Image className="rounded-full hidden sm:block" src={profilePhoto} alt="user-profile" />
      </div>
    </div>
  </nav>
  );
};

export default Header;
