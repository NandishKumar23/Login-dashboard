import React, { FC } from "react";
import { InfoCardData } from "@/@types";

// Defining the InfoCard Props interface
interface InfoCardProps {
  data: InfoCardData;
}

const InfoCard: FC<InfoCardProps> = ({ data }) => {
  return (
    <div className={`rounded-[20px] p-4 ${data.bgColor}`}>
      <div className="flex justify-end">
        <img src={data.icon} alt={`${data.title}-icon`} className="mr-3" />
      </div>
      <div>
        <p className="text-sm mb-1">{data.title}</p>
        <h4 className="font-bold text-2xl">{data.value}</h4>
      </div>
    </div>
  );
};

export default InfoCard;
