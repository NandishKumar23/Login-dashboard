import React, { useState } from "react";


//Navigation Links
const navLinks = [
  {
    id: 1,
    name: "Dashboard",
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

const Navbar = () => {
  //State to tToggle the Menu
  const [isOpen, setIsOpen] = useState(false);

  //Function to Toggle the Menu
  const toggleMenuHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-black fixed top-0 left-0 w-full md:hidden p-4 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold tracking-wider">Board.</h1>
        {/* Button to toggle the menu */}
        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleMenuHandler}
        >
          {/* Conditional rendering of the menu icon */}
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Conditionally render the menu based on the state */}
      <div>
        {isOpen && (
          <>
            {/*Navigation Links*/}
            <nav className="my-4 text-white">
              {navLinks.map((l) => {
                return (
                  <div className="flex items-center my-6" key={l.id}>
                    <img src={l.icon} alt={`${l.name}-icon`} className="mr-3" />
                    <p className="text-[18px]">{l.name}</p>
                  </div>
                );
              })}
            </nav>
            {/* Help and Contact Us buttons */}
            <div className="text-white flex ">
              <button className="block text-sm my-2 mr-2">Help</button>
              <button className="block text-sm my-2">Contact Us</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
