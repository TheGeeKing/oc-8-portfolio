import React, { type ReactNode } from "react";

export const Card = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
      {children}
    </div>
  );
};
