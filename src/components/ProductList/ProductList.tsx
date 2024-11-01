import React from "react";
import { formatPrice } from "../../lib/utils";

interface IProduct {
  id: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  reviewsAmont: number;
}

interface IProductImage {
  id: string;
  width: number;
  height: number;
}

const productsImages: IProductImage[] = [
  { id: "1", width: 170, height: 273 },
  { id: "2", width: 187, height: 274 },
  { id: "3", width: 170, height: 273 },
  { id: "4", width: 187, height: 274 },
];

export const ProductList = () => {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState<IProduct[]>([]);


  React.useEffect(() => {
    if( typeof process.env.REACT_APP_FETCH_URL !== "string" ){
      throw new Error("Please set you REACT_APP_FETCH_URL in .env.local");
    }

    fetch(process.env.REACT_APP_FETCH_URL, {
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
  
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return <div>
    <h1 className="text-3xl font-bold underline">The Fab 4</h1>
    {products.map(({ id, name, description, rating, price, reviewsAmont }) => {
      const image = productsImages.find(image => image.id === id);

      return (
        <div key={id} className="border-2 border-gray-200 p-4 m-4">
          <img src={`/images/image-${id}.png`} alt={name} width={image?.width || 0} height={image?.height || 0} />
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{rating}</p>
          <p>{reviewsAmont}</p>
          <p>{formatPrice(price)}</p>
        </div>
      );
    })}
  </div>;
};