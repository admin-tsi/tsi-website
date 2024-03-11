import React from "react";
import { Star } from "@/utils/svgs";

interface JobItemProps {
  number: string;
  title: string;
  description: string;
}

const JobItem: React.FC<JobItemProps> = ({ number, title, description }) => {
  return (
    <div className="border-b border-black relative group overflow-hidden">
      <div className="transition ease-in-out delay-150 duration-300 bg-black opacity-5 absolute h-full w-full group-hover:translate-y-0 translate-y-48"></div>
      <div className="flex flex-col sm:flex-row justify-between items-end py-8">
        <div className="flex items-start md:items-center z-10">
          <Star className="transition ease-in-out delay-150 duration-300 group-hover:translate-y-0 translate-y-48" />
          <div>
            <h1 className="text-lg md:text-4xl font-light ml-2">{title}</h1>
          </div>
        </div>
        <div className="w-full sm:w-1/3 z-10 text-right mt-4 sm:mt-0">
          <h1 className="text-sm font-light underline">View Job</h1>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
