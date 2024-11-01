import React from "react";
import { Container } from "../Container/Container";

interface ILinkProps {
  text: string;
}

export const Bar = ({ text }: ILinkProps) => 
  <div className="text-center bg-custom-yellow-100 font-semibold text-base leading-6 p-4 rounded  rounded-t-3xl rounded-br-3xl mb-10">
    <Container>
      {text}
    </Container>
  </div>
;