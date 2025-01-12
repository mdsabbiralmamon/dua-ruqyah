import React from "react";
import Search from "../Search/Search";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";

const Topnavbar = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Dua Page</h1>
      <div className="flex items-center space-x-64">
        {/* search bar */}
        <Search />
        {/* Avatar / Mini Navigation */}
        <ProfileAvatar />
      </div>
    </div>
  );
};

export default Topnavbar;
