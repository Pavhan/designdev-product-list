import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IProps) => <div className="max-w-[1196px] mx-auto px-4">
  {children}
</div>;