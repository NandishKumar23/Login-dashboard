import React, { useEffect } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import InfoCard from "@/components/card/infoCard";
import EventCard from "@/components/card/eventCard";
import LineChart from "@/components/chart/lineChart";
import PieChart from "@/components/chart/pieChart";
import Navbar from "@/components/navbar/navbar";
import { EventCardData, InfoCardData } from "@/@types";
import { NextPage } from "next";
import {signOut} from "next-auth/react"

const InfoCardDetails: InfoCardData[] = [
  {
    id: 1,
    title: "Total Revenues",
    value: "$2,129,430",
    icon: "../assets/accessories/totalRevenue-icon.svg",
    bgColor: "bg-[#DDEFE0]",
  },
  {
    id: 2,
    title: "Total Transactions",
    value: "1,520",
    icon: "../assets/accessories/totalTransactions-icon.svg",
    bgColor: "bg-[#F4ECDD]",
  },
  {
    id: 3,
    title: "Total Likes",
    value: "9,721",
    icon: "../assets/accessories/totalLikes-icon.svg",
    bgColor: "bg-[#EFDADA]",
  },
  {
    id: 4,
    title: "Total Users",
    value: "892",
    icon: "../assets/accessories/totalUsers-icon.svg",
    bgColor: "bg-[#DEE0EF]",
  },
];

const EventCardDetails: EventCardData[] = [
  {
    id: 1,
    title: "Meeting with suppliers from Kuta Bali",
    time: "14.00-15.00",
    location: "at Sunset Road, Kuta, Bali",
    borderDesign: "border-[#9BDD7C]",
  },
  {
    id: 2,
    title: "Check operation at Giga Factory 1",
    time: "18.00-20.00",
    location: "at Central Jakarta ",
    borderDesign: "border-[#6972C3]",
  },
];

const Home: NextPage = () => {
  return (
    <div className="flex p-4 lg:p-8 bg-[#F5F5F5]">
      {/*Navigation Section */}
      <Navbar />
      <Sidebar />
      {/*Dashboard Contents */}
      <div className="w-full p-4  ml-0 md:ml-[20%]  mt-[50px] md:mt-0 mr-4">
        {/*Header Section*/}
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-bold text-2xl">Dashboard</h3>
          <div className="flex">
            <div className="relative">
              <div className="absolute pr-3 inset-y-0 right-0 flex items-center pointer-events-none">
                <img
                  src="../assets/accessories/search-icon.svg"
                  alt="search-icon"
                />
              </div>
              <input
                type="text"
                id="text"
                className="block w-full py-2 px-4 text-sm rounded-[10px] placeholder-[#B0B0B0]"
                placeholder="search..."
                required
              />
            </div>
            <button className="mx-5" >
              <img src="../assets/accessories/bell-icon.svg" alt="bell-icon" />
            </button>
            <button className="mx-5" onClick={()=>{
              signOut()
              window?.localStorage?.removeItem("session")
            }}>
              <img
                src="../assets/accessories/admin-icon.svg"
                alt="admin-icon"
              />
            </button>
          </div>
        </div>
        {/*Info Card Section*/}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {InfoCardDetails.map((d) => {
            return <InfoCard key={d.id} data={d} />;
          })}
        </div>
        {/*Activities Chart Section with Line Chart */}
        <div className="my-12 bg-white p-8 rounded-[20px]">
          <div className="flex flex-col items-cente mb-2">
            <h3 className="font-bold text-lg mb-2">Activites</h3>
            <div className="flex items-center">
              <p className="text-xs text-[#858585] mr-2">May - June 2021</p>
              <img
                src="../assets/accessories/arrowDown-icon.svg"
                alt="ArrowDown-Icon"
              />
            </div>
          </div>
          <LineChart />
        </div>
        {/*Products & Schedule Section*/}
        <div className="my-10 grid gap-8 md:grid-cols-2">
          {/*Products Section with Pie Chart */}
          <div className="bg-white p-8 rounded-[20px]">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Top Products</h3>
              <div className="flex items-center">
                <p className="text-xs text-[#858585] mr-2">May - June 2021</p>
                <img
                  src="../assets/accessories/arrowDown-icon.svg"
                  alt="ArrowDown-Icon"
                />
              </div>
            </div>
            <div>
              <PieChart />
            </div>
          </div>
          {/*Schedule Section with Event Cards */}
          <div className="bg-white p-8 rounded-[20px]">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Today’s schedule</h3>
              <p className="text-xs text-[#858585]">See All &gt;</p>
            </div>
            <div>
              {EventCardDetails.map((d) => {
                return <EventCard key={d.id} data={d} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
