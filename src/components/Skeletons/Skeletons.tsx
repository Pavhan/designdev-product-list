import React from "react";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export const ProductSkeleton = () => {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-product bg-gray-100 p-2 shadow-sm`}
    >
      <div className="pt-2.5 pb-[5px] px-2.5 h-[278px] bg-gray-50"></div>
      <div className="flex flex-col rounded-product px-4 pb-4 pt-[21px]">
        <div className="w-40 h-[28px] rounded-md bg-gray-50" />
        <div className="mt-4 w-full h-[22px] rounded-md bg-gray-50" />
        <div className="mt-1 w-full h-[22px] rounded-md bg-gray-50" />
        <div className="mt-4 flex gap-x-[17px] flex-nowrap items-center">
          <div className="w-[30px] h-[30px] rounded-md bg-gray-50" />
          <div className="w-[30px] h-[30px] rounded-md bg-gray-50" />
          <div className="w-[30px] h-[30px] rounded-md bg-gray-50" />
          <div className="w-[30px] h-[30px] rounded-md bg-gray-50" />
          <div className="w-[30px] h-[30px] rounded-md bg-gray-50" />
        </div>
        <div className="mt-4 w-20 h-[16px] rounded-md bg-gray-50" />
        <div className="mt-4 w-20 h-[28px] rounded-md bg-gray-50" />
        <div className="mt-4 w-full h-10 rounded-md bg-gray-50" />
      </div>
    </div>
  );
};

export const ProductsSkeleton = () => {
  return (
    <>
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </>
  );
};