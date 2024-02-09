"use client";
import React, { useContext, useState } from "react";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { youtubeContext } from "../context/contextWrapper";
import { useRouter } from "next/navigation";

const LeftNav = () => {
  const { selectCategory, setSelectCategory, mobileMenu } =
    useContext(youtubeContext);
  const router = useRouter();
  const caterogyHandler = (type, name) => {
    router.push("/");
    switch (type) {
      case "category":
        setSelectCategory(name);
        break;
      case "home":
        setSelectCategory(name);
        break;
      default:
        break;
    }
  };
  return (
    <div
      className={`md:relative absolute overflow-y-auto h-full bg-primaryClr p-4 z-50 ${
        mobileMenu && "translate-x-0"
      } md:-translate-x-0 -translate-x-[100%] transition-all`}
    >
      <div className="flex flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                icon={item.icon}
                title={item.type == "home" ? "Home" : item.name}
                action={() => {
                  caterogyHandler(item.type, item.name);
                }}
                isActiveCategory={`${
                  item.name === selectCategory ? "bg-zinc-800" : ""
                }`}
              />
              {item.divider && <hr className="my-5" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNav;
