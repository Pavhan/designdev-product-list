import React from "react";

interface ILinkProps {
  href: string;
  text: string;
}

export const Link = ({ href, text }: ILinkProps) => (
  <a
    href={href}
    className="inline-block text-base font-bold leading-6 text-custom-green-100 underline hover:no-underline"
  >
    {text}
  </a>
);
