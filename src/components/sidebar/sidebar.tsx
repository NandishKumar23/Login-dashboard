import React, { FC } from "react";

//Navigation Links
const navLinks = [
  {
    id: 1,
    name: "dashboard",
    icon: "../assets/accessories/dashboard-icon.svg",
  },
  {
    id: 2,
    name: "Transactions",
    icon: "../assets/accessories/transaction-icon.svg",
  },
  {
    id: 3,
    name: "Schedules",
    icon: "../assets/accessories/schedule-icon.svg",
  },
  {
    id: 4,
    name: "Users",
    icon: "../assets/accessories/user-icon.svg",
  },
  {
    id: 5,
    name: "Settings",
    icon: "../assets/accessories/setting-icon.svg",
  },
];

const Sidebar: FC = () => {
  return (
    <div className="bg-black hidden w-[18%] h-[92vh] rounded-[30px] text-white p-6 lg:p-8 xl:p-11 md:flex flex-col justify-between fixed">
      <div className="my-4">
        {/* Sidebar heading */}
        <h1 className="text-white text-4xl font-bold tracking-wider">Board.</h1>

        {/* Navigation links with icons */}
        <nav className="my-12">
          {navLinks.map((l) => {
            return (
              <div className="flex items-center my-6" key={l.id}>
                <img src={l.icon} alt={`${l.name}-icon`} className="mr-3" />
                <p className="text-[18px]">{l.name}</p>
              </div>
            );
          })}
        </nav>
      </div>
      {/* Help and contact buttons */}
      <div>
        <button className="block text-sm my-3">Help</button>
        <button className="block text-sm my-3">Contact Us</button>
      </div>
    </div>
  );
};

export default Sidebar;
