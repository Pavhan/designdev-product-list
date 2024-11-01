import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IProps) => (
  <div className="mx-auto max-w-[1196px] px-4">{children}</div>
);
