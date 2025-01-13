'use client';

import Categories from "@/components/DuaPage/Categories/Categories";
import MainContent from "@/components/DuaPage/MainContent/MainContent";
import NavbarMain from "@/components/shared/NavbarMain/NavbarMain";
import RightNavbar from "@/components/shared/RightNavbar/RightNavbar";
import Topnavbar from "@/components/shared/TopNavbar/Topnavbar";
import React, { useState } from "react";

const Page = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  return (
    <div className="">
      <div className="flex gap-8">
        <NavbarMain />
        <div className="w-full">
          <Topnavbar />
          <div className="flex justify-between my-4 gap-5">
            <Categories onSubcategoryClick={setSelectedSubcategory} />
            <MainContent subcategory={selectedSubcategory} />
            <RightNavbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
