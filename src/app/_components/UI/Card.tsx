import React, { ReactNode } from "react";

interface CardProps {
  className?: string;
  children?: ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={`bg-white group p-4 rounded transition ease-in-out delay-350 hover:transition-all duration-700 hover:border-white hover:border hover:bg-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};
