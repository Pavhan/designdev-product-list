import React from "react";
import { ProductList } from "./components/ProductList/ProductList";
import { Container } from "./components/Container/Container";
import { Tabs } from "./components/Tabs/Tabs";


export const SOURCE = {
  "dogs": "products",
  "humans": "products-humans",
} as const;

const tabs: Record<keyof typeof SOURCE, {label: string, content: JSX.Element}> = {
  dogs: {
    label: "For Dogs",
    content:  <ProductList source={SOURCE.dogs} />,
  },
  "humans": {
    label: "For Humans",
    content:  <ProductList source={SOURCE.humans}/>,
  },
};

function App() {
  return <div className="text-custom-black py-[58px] mb-10">
    <Container>
      <h1 className="font-nunito text-[40px] leading-[57px] font-extrabold text-center mb-10">The Fab 4</h1>
    </Container>
    <Tabs items={tabs} />
  </div>;
}

export default App;
