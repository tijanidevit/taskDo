import React, { ReactNode } from "react";

interface MemberIconProps {
  bg: string;
  children?: ReactNode;
}

export const MemberIcon: React.FC<MemberIconProps> = ({ bg, children }) => {
  const hasChildren = React.Children.count(children) > 0;

  return (
    <div
      className={` rounded-md ${bg} ml-[-0.4rem] ${
        hasChildren
          ? "text-[14px] leading-[171.429%] p-2 font-medium text-[#2D3036]"
          : "p-4"
      }`}
    >
      {children}
    </div>
  );
};
