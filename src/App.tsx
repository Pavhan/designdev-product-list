import React from "react";
import { ProductList } from "./components/ProductList/ProductList";
import { Container } from "./components/Container/Container";
import { Tabs } from "./components/Tabs/Tabs";

export const SOURCE = {
  dogs: "products",
  humans: "products-humans",
} as const;

const tabs: Record<
  keyof typeof SOURCE,
  { label: string; content: JSX.Element }
> = {
  dogs: {
    label: "For Dogs",
    content: <ProductList source={SOURCE.dogs} />,
  },
  humans: {
    label: "For Humans",
    content: <ProductList source={SOURCE.humans} />,
  },
};

function App() {
  return (
    <div className="text-custom-black mb-10 py-[58px]">
      <Container>
        <h1 className="mb-10 text-center font-nunito text-[40px] font-extrabold leading-[57px]">
          The Fab 4
        </h1>
      </Container>
      <Tabs items={tabs} />
    </div>
  );
}

export default App;
