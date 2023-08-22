import React, { FC } from "react";
import { EventCardData } from "@/@types";

// Defining the EventCard Props interface
interface EventCardProps {
  data: EventCardData;
}

const EventCard: FC<EventCardProps> = ({ data }) => {
  return (
    <div className={`border-l-4  p-3 my-3 ${data.borderDesign}`}>
      <h6 className="text-sm text-[#666666] ">{data.title}</h6>
      <p className="text-xs text-[#999999]">{data.time}</p>
      <p className="text-xs text-[#999999]">{data.location}</p>
    </div>
  );
};

export default EventCard;
