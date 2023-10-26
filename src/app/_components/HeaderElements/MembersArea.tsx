import React from "react";
import { MemberIcon } from "../UI";

export const MembersArea = () => {
  return (
    <div className="flex">
      <MemberIcon bg="bg-green-400" />
      <MemberIcon bg="bg-yellow-400" />
      <MemberIcon bg="bg-green-400" />
      <MemberIcon bg="bg-yellow-400">+11</MemberIcon>
    </div>
  );
};
