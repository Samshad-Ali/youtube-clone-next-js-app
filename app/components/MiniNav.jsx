import React, { useContext } from "react";
import { youtubeContext } from "../context/contextWrapper";
const MiniNav = () => {
    const {setSelectCategory} = useContext(youtubeContext);
  const minibarBtn = [
    "All",
    "New to you",
    "Standup comedy",
    "Rap Songs",
    "Coding",
    "React js",
    "Web development",
    "Comedy",
    "Code with harry",
    "News",
    "Bollywood",
    "English Songs",
    "Gaming",
    "Movies",
    "Cricket",
    "Sports",
  ];
  return (
    <div className=" p-2 sticky top-0 z-10 bg-black overflow-x-auto flex items-center gap-4">
      {minibarBtn.map((item) => {
        return (
          <button className=" min-w-fit text-sm rounded-md sm:rounded-xl hover:bg-zinc-800 hover:bg-opacity-50 p-2 px-6 list-none border border-zinc-800 bg-zinc-900 bg-opacity-50"
          onClick={()=>{setSelectCategory(item)}}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default MiniNav;
