import Image from "next/image";
import React from "react";

const ProfileAvatar = () => {
  return (
    <div className="flex items-center space-x-2">
      <div>
        <Image src="/images/avatar.png" width={40} height={40} alt="avatar" />
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
        >
          <path
            d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
            fill="#868686"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProfileAvatar;
