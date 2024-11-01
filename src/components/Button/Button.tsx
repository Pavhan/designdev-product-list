import React from "react";

interface IButtonProps {
  text: string;
}

export const Button = ({ text }: IButtonProps) => (
  <button className="mt-4 block w-full rounded-button bg-gradient-to-l from-custom-green-200 to-custom-green-300 p-[14px] text-base font-bold leading-5 text-white hover:bg-gradient-to-r">
    {text}
  </button>
);
