import React, { ReactNode } from "react";
import { Card } from "../UI/Card";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

interface StatusCard {
  status?: object;
}

export const StatusCard: React.FC<StatusCard> = ({ status }) => {
  return (
    <Card className="my-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h2 className="font-semibold leading-[150%] tracking-[-0.2px] text-[20px]">
            To do
          </h2>
          <div className="px-2.5 border-2 rounded border border-black leading-[171.429%] font-medium text-[14px]">
            3
          </div>
        </div>

        <div>
          <EllipsisHorizontalIcon width={30} />
        </div>
      </div>
    </Card>
  );
};
