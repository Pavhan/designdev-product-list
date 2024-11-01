import React from "react";

interface IButtonProps {
  text: string;
}

export const Button = ({ text }: IButtonProps) => 
  <button className="bg-gradient-to-l from-custom-green-200 to-custom-green-300 block mt-4 w-full leading-5 text-white font-bold text-base p-[14px] rounded-button hover:bg-gradient-to-r">{text}</button>
;