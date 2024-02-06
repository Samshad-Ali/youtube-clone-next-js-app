'use client';
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { TbVideoPlus } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import React, { useContext, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { youtubeContext } from "../context/contextWrapper";
import ytLogo from '../assets/yt-logo.png';
import ytLogoMobile from '../assets/yt-logo-mobile.png'
import profilePhoto from '../assets/unnamed.jpg'
import { useRouter } from 'next/navigation';
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(youtubeContext);
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
  }
  return (
    // <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
    //   <div className="flex h-5 items-center">
   
    //       <div
    //         className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
    //       >

    //       </div>
       
    //     <Link href="/" className="flex h-5 items-center">
    //       <Image
    //         className="h-full hidden dark:md:block"
    //         src={ytLogo}
    //         alt="Youtube"
    //       />
    //       <Image className="h-full md:hidden" src={ytLogoMobile} alt="Youtube" />
    //     </Link>
    //   </div>
    //   <div className="group flex items-center">
    //     <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
    //       <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
    //         <IoIosSearch className="text-white text-xl" />
    //       </div>
    //       <input
    //         type="text"
    //         className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
    //         placeholder="Search"
    //       />
    //     </div>
    //     <button
    //       className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
    //     >
    //       <IoIosSearch className="text-white text-xl" />
    //     </button>
    //   </div>
    //   <div className="flex items-center">
    //     <div className="hidden md:flex">
    //       <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
    //         <RiVideoAddLine className="text-white text-xl cursor-pointer" />
    //       </div>
    //       <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
    //         <FiBell className="text-white text-xl cursor-pointer" />
    //       </div>
    //     </div>
    //     <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
    //       <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
    //     </div>
    //   </div>
    // </div>
    <nav className="bg-primaryClr w-full h-14 gap-4 flex items-center justify-between p-2 px-4 sticky top-0 z-50">
    <div className=" flex items-center gap-2">
      <button className="text-2xl hover:bg-zinc-800 rounded-full p-2">
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
          className="w-full sm:[95%] md:flex-1 p-2 placeholder:text-zinc-400 tracking-wider bg-transparent rounded-full outline-none pl-3 md:pl-6"
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
