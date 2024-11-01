import React from "react";
import { formatPrice } from "../../lib/utils";
import { Rating } from "../Rating/Rating";
import { Link } from "../Link/Link";
import { Button } from "../Button/Button";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  reviewsAmount: number;
}

export interface IProductImage {
  id: string;
  width: number;
  height: number;
}

interface IProductWithImage extends IProduct {
  image?: IProductImage;
}

export const Product = ({ id, name, description, rating, price, reviewsAmount, image }: IProductWithImage) => <div className="shadow-product rounded-product bg-white">
  <div className="rounded-product bg-gradient-to-br from-30% from-custom-orange-300 via-80% via-custom-orange-200 to-100% to-custom-orange-100 pt-2.5 pb-[5px] px-2.5 h-[278px] overflow-hidden flex justify-center">
    <img src={`/images/image-${id}.png`} alt={name} width={image?.width || 0} height={image?.height || 0} className="max-h-full h-auto w-auto max-w-full" />
  </div>
  <div className="px-4 pb-4 pt-[21px]">
    <h2 className="text-2xl font-bold leading-7 line-clamp-1" title={name}>{name}</h2>
    <p className="mt-4 font-medium text-lg leading-6 line-clamp-2" title={description}>{description}</p>
    <div className="mt-4">
      <Rating value={rating} />
    </div>
    <p className="mt-4">
      <Link href="/reviews" text={`${reviewsAmount} reviews`} />
    </p>
    <p className="mt-4 text-2xl font-bold leading-7">{formatPrice(price)}</p>
    <Button text="Add to Cart" />
  </div>
</div>;