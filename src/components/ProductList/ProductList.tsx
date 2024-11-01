import React from "react";
import { IProduct, IProductImage, Product } from "../Product/Product";
import { Container } from "../Container/Container";
import { ProductsSkeleton } from "../Skeletons/Skeletons";

const productsImages: IProductImage[] = [
  { id: "1", width: 170, height: 273 },
  { id: "2", width: 187, height: 274 },
  { id: "3", width: 170, height: 273 },
  { id: "4", width: 187, height: 274 },
];

interface IProps {
  source: string;
}

export const ProductList = ({ source } : IProps) => {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState<IProduct[]>([]);

  React.useEffect(() => {
    if( typeof process.env.REACT_APP_FETCH_URL !== "string" ){
      throw new Error("Please set you REACT_APP_FETCH_URL in .env.local");
    }

    fetch(`${process.env.REACT_APP_FETCH_URL}/${source}`, {
      method: "GET",
      headers: { "content-type":"application/json" },
    }).then(res => {
      if (res.ok) {
        return res.json(); 
      }
    }).then(products => {
      setProducts(products);
      setLoading(false);
    }).catch(() => {
      throw new Error("Failed to fetch products list");
    });
  
  }, [source]);
  
  return <Container>
    {loading ? <div className="grid grid-col-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <ProductsSkeleton />
    </div>
      : 
      <div className="grid grid-col-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => {
          const image = productsImages.find(image => image.id === product.id);
          return (
            <Product key={product.id} image={image} {...product} />
          );
        })}
      </div>}</Container>;
};