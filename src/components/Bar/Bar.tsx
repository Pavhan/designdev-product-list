import React from "react";
import { Container } from "../Container/Container";

interface ILinkProps {
  text: string;
}

export const Bar = ({ text }: ILinkProps) => (
  <div className="mb-10 rounded rounded-t-3xl rounded-br-3xl bg-custom-yellow-100 p-4 text-center text-base font-semibold leading-6">
    <Container>{text}</Container>
  </div>
);
