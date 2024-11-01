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

export const Product = ({
  id,
  name,
  description,
  rating,
  price,
  reviewsAmount,
  image,
}: IProductWithImage) => (
  <div className="flex flex-col rounded-product bg-white shadow-product">
    <div className="flex h-[278px] justify-center overflow-hidden rounded-product bg-gradient-to-br from-custom-orange-300 from-30% via-custom-orange-200 via-80% to-custom-orange-100 to-100% px-2.5 pb-[5px] pt-2.5">
      <img
        src={`/images/image-${id}.png`}
        alt={name}
        width={image?.width || 0}
        height={image?.height || 0}
        className="h-auto max-h-full w-auto max-w-full"
      />
    </div>
    <div className="flex grow flex-col px-4 pb-4 pt-[21px]">
      <h2 className="line-clamp-1 text-2xl font-bold leading-7" title={name}>
        {name}
      </h2>
      <p
        className="mt-4 line-clamp-2 grow text-lg font-medium leading-6"
        title={description}
      >
        {description}
      </p>
      <div className="mt-4">
        <Rating value={rating} />
      </div>
      <p className="mt-4">
        <Link href="/reviews" text={`${reviewsAmount} reviews`} />
      </p>
      <p className="mt-4 text-2xl font-bold leading-7">{formatPrice(price)}</p>
      <Button text="Add to Cart" />
    </div>
  </div>
);
