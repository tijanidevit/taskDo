"use client";
import { useState } from "react";
import { Card } from "./_components/UI/Card";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { TaskCard } from "./_components/Tasks";
export default function Home() {
  const [activeButton, setActiveButton] = useState("board");
  return (
    <>
      <div className="flex space-x-6">
        <button
          className={`${
            activeButton === "overview" && "text-blue-600"
          } leading-[162.5%] font-medium text-[#898E99]`}
          onClick={() => setActiveButton("overview")}
        >
          Overview
        </button>

        <button
          className={`${
            activeButton === "board" && "text-blue-600"
          } leading-[162.5%] font-medium text-[#898E99]`}
          onClick={() => setActiveButton("board")}
        >
          Board
        </button>

        <button
          className={`${
            activeButton === "calendar" && "text-blue-600"
          } leading-[162.5%] font-medium text-[#898E99]`}
          onClick={() => setActiveButton("calendar")}
        >
          Calendar
        </button>
      </div>

      <div className="flex">
        <div className="w-[30%]">
          <TaskCard />
        </div>
      </div>
    </>
  );
}
