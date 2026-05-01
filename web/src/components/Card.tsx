import React, { type ReactNode } from "react";

export const Card = ({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex h-full w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white ${className}`}
    >
      {children}
    </div>
  );
};
