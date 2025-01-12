import React from "react";

const RightNavbar = () => {
  return (
    <div className="bg-white p-5 shadow-xl rounded-3xl w-80 h-[calc(100vh-180px)]">
      <h2 className="text-center text-xl font-bold">Settings</h2>
      {/* Language Settings */}
      <div className="bg-[#F7F8FA] p-2 rounded-xl mt-5">
        <div className="flex items-center space-x-3">
          <div className="bg-[#E8F0F5] p-4 rounded-full flex items-center justify-center ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M12.751 5C11.783 10.77 8.07 15.61 3 18.129M3 5H15H3ZM9 3V5V3ZM10.048 14.5C8.5081 12.9059 7.27548 11.0413 6.412 9L10.048 14.5ZM12.5 18H19.5H12.5ZM11 21L16 11L21 21H11Z"
                stroke="#868686"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-[#868686]">Language Settings</h3>
        </div>
      </div>
      {/* General Settings */}
      <div className="bg-[#F7F8FA] p-2 rounded-xl mt-5">
        <div className="flex items-center space-x-3">
          <div className="bg-[#E8F0F5] p-4 rounded-full flex items-center justify-center ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="#1E1E1E" />
              <rect
                width="1920"
                height="1295"
                transform="translate(-1592 -303)"
                fill="#F7F8FA"
              />
              <rect
                id="Rectangle 2"
                x="-41.75"
                y="-169.75"
                width="329.5"
                height="833.5"
                rx="31.75"
                fill="white"
                stroke="#E2E2E2"
                stroke-width="0.5"
              />
              <path
                id="Rectangle 28"
                d="M-21 -11C-21 -13.7614 -18.7614 -16 -16 -16H7.5504H137.775H263C265.761 -16 268 -13.7614 268 -11V34C268 36.7614 265.761 39 263 39H-16C-18.7614 39 -21 36.7614 -21 34V-11Z"
                fill="#F7F8FA"
              />
              <circle id="Ellipse 1" cx="12" cy="12" r="19" fill="#E8F0F5" />
              <path
                id="Vector"
                d="M7 7H17M19 11H5H19ZM19 11C19.5304 11 20.0391 11.2107 20.4142 11.5858C20.7893 11.9609 21 12.4696 21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V13C3 12.4696 3.21071 11.9609 3.58579 11.5858C3.96086 11.2107 4.46957 11 5 11H19ZM19 11V9C19 8.46957 18.7893 7.96086 18.4142 7.58579C18.0391 7.21071 17.5304 7 17 7L19 11ZM5 11V9C5 8.46957 5.21071 7.96086 5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7L5 11ZM7 7V5C7 4.46957 7.21071 3.96086 7.58579 3.58579C7.96086 3.21071 8.46957 3 9 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V7H7Z"
                stroke="#868686"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-[#868686]">General Settings</h3>
        </div>
      </div>
      {/* Font Settings */}
      <div className="bg-[#F7F8FA] p-2 rounded-xl mt-5">
        <div className="flex items-center space-x-3">
          <div className="bg-[#E8F0F5] p-4 rounded-full flex items-center justify-center ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M8 2.75H5C3.75736 2.75 2.75 3.75736 2.75 5V8C2.75 9.24264 3.75736 10.25 5 10.25H8C9.24264 10.25 10.25 9.24264 10.25 8V5C10.25 3.75736 9.24264 2.75 8 2.75Z"
                stroke="#868686"
                stroke-width="1.5"
              />
              <path
                id="Vector_2"
                d="M19 2.75H16C14.7574 2.75 13.75 3.75736 13.75 5V8C13.75 9.24264 14.7574 10.25 16 10.25H19C20.2426 10.25 21.25 9.24264 21.25 8V5C21.25 3.75736 20.2426 2.75 19 2.75Z"
                stroke="#868686"
                stroke-width="1.5"
              />
              <path
                id="Vector_3"
                d="M19 13.75H16C14.7574 13.75 13.75 14.7574 13.75 16V19C13.75 20.2426 14.7574 21.25 16 21.25H19C20.2426 21.25 21.25 20.2426 21.25 19V16C21.25 14.7574 20.2426 13.75 19 13.75Z"
                stroke="#868686"
                stroke-width="1.5"
              />
              <path
                id="Vector_4"
                d="M8 13.75H5C3.75736 13.75 2.75 14.7574 2.75 16V19C2.75 20.2426 3.75736 21.25 5 21.25H8C9.24264 21.25 10.25 20.2426 10.25 19V16C10.25 14.7574 9.24264 13.75 8 13.75Z"
                stroke="#868686"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <h3 className="text-[#868686]">Font Settings</h3>
        </div>
      </div>
      {/* Appearance Settings */}
      <div className="bg-[#F7F8FA] p-2 rounded-xl mt-5">
        <div className="flex items-center space-x-3 overflow-hidden">
          <div className="bg-[#E8F0F5] p-4 rounded-full flex items-center justify-center ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M8 2.75H5C3.75736 2.75 2.75 3.75736 2.75 5V8C2.75 9.24264 3.75736 10.25 5 10.25H8C9.24264 10.25 10.25 9.24264 10.25 8V5C10.25 3.75736 9.24264 2.75 8 2.75Z"
                stroke="#868686"
                stroke-width="1.5"
              />
              <path
                id="Vector_2"
                d="M19 2.75H16C14.7574 2.75 13.75 3.75736 13.75 5V8C13.75 9.24264 14.7574 10.25 16 10.25H19C20.2426 10.25 21.25 9.24264 21.25 8V5C21.25 3.75736 20.2426 2.75 19 2.75Z"
                stroke="#868686"
                stroke-width="1.5"
              />
              <path
                id="Vector_3"
                d="M19 13.75H16C14.7574 13.75 13.75 14.7574 13.75 16V19C13.75 20.2426 14.7574 21.25 16 21.25H19C20.2426 21.25 21.25 20.2426 21.25 19V16C21.25 14.7574 20.2426 13.75 19 13.75Z"
                stroke="#868686"
                stroke-width="1.5"
              />
              <path
                id="Vector_4"
                d="M8 13.75H5C3.75736 13.75 2.75 14.7574 2.75 16V19C2.75 20.2426 3.75736 21.25 5 21.25H8C9.24264 21.25 10.25 20.2426 10.25 19V16C10.25 14.7574 9.24264 13.75 8 13.75Z"
                stroke="#868686"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <h3 className="text-[#868686]">Appearance Settings</h3>
        </div>
      </div>
    </div>
  );
};

export default RightNavbar;
