import Categories from "@/components/DuaPage/Categories/Categories";
import MainContent from "@/components/DuaPage/MainContent/MainContent";
import NavbarMain from "@/components/shared/NavbarMain/NavbarMain";
import RightNavbar from "@/components/shared/RightNavbar/RightNavbar";
import Topnavbar from "@/components/shared/TopNavbar/Topnavbar";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex gap-8">
        <NavbarMain />
        <div className="w-full">
          <Topnavbar />
          <div className="flex justify-between my-4 gap-5">
            <Categories />
            <MainContent />
            <RightNavbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
