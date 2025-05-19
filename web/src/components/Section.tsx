import React from "react";
import { Separator } from "./Separator";

export const Section = ({ title }: { title: string }) => {
  return (
    <>
      <Separator />
      <h2 className="flex items-center justify-center text-2xl font-bold">
        {title}
      </h2>
      <Separator />
    </>
  );
};
