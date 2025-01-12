import NavbarMain from "@/components/shared/NavbarMain/NavbarMain";
import Topnavbar from "@/components/shared/TopNavbar/Topnavbar";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex gap-8">
        <NavbarMain />
        <Topnavbar />
      </div>
    </div>
  );
};

export default page;
