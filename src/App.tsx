import React from "react";
import { ProductList } from "./components/ProductList/ProductList";
import { Bar } from "./components/Bar/Bar";
import { Container } from "./components/Container/Container";

function App() {
  return <div className="text-custom-black py-[58px]">
    <Container>
      <h1 className="font-nunito text-[40px] leading-[56.56px] font-extrabold text-center mb-10">The Fab 4</h1>
    </Container>
    <Bar text="Buy multiples original canine or human products" />
    <ProductList />
  </div>;
}

export default App;
