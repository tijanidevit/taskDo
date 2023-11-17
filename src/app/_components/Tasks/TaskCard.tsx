import React, { ReactNode } from "react";
import { Card } from "../UI/Card";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { MemberIcon } from "../UI";

interface TaskCard {
  task?: object;
}

export const TaskCard: React.FC<TaskCard> = ({ task }) => {
  return (
    <Card className="my-4">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <h2 className="font-normal leading-[171.429%] rounded px-5 py-2.5 bg-[#FDF7E6] text-[#816204] text-[14px]">
            Mid
          </h2>
          <h2 className="font-normal leading-[171.429%] rounded px-5 py-2.5 bg-blue-100 text-blue-900 text-[14px]">
            UI/UX
          </h2>
        </div>

        <div>
          <EllipsisHorizontalIcon width={30} />
        </div>
      </div>

      <div className="mb-2">
        <h2 className="mb-4 text-[#2D3036] font-semibold text-[20px] leading-[150%] tracking-[-0.2px]">
          Create Shot Dribbble
        </h2>
        <p className="leading-[162.5%] text-[#616874]">
          Make dribbble shots for studio portfolio needs and your own portfolio.
        </p>
      </div>

      <div className="divide-y divide-slate-200">
        <div className="flex justify-between">
          <div className="space-y-2">
            <p className="text-[14px] leading-[171.429%] font-medium text-[#616874]">
              Assign
            </p>
            <div className="flex">
              <MemberIcon bg="bg-green-400" />
              <MemberIcon bg="bg-yellow-400" />
              <MemberIcon bg="bg-green-400" />
              <MemberIcon bg="bg-yellow-400">+2</MemberIcon>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[14px] leading-[171.429%] font-medium text-[#616874]">
              Deadline
            </p>
            <div className="flex space-x-1 items-center justify-center text-[#2D3036] font-medium leading-[162.5%]">
              <p>24 Jun</p>
              <p className="">{"-"}</p>
              <p>16:00</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
