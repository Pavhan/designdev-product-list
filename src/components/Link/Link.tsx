import React from "react";

interface ILinkProps {
  href: string;
  text: string;
}

export const Link = ({ href, text }: ILinkProps) => 
  <a href={href} className="text-custom-green-100 font-bold text-base leading-6 underline hover:no-underline inline-block">{text}</a>
;