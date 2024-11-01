import React from "react";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export const ProductSkeleton = () => {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-product bg-gray-100 p-2 shadow-sm`}
    >
      <div className="h-[278px] bg-gray-50 px-2.5 pb-[5px] pt-2.5"></div>
      <div className="flex flex-col rounded-product px-4 pb-4 pt-[21px]">
        <div className="h-[28px] w-40 rounded-md bg-gray-50" />
        <div className="mt-4 h-[22px] w-full rounded-md bg-gray-50" />
        <div className="mt-1 h-[22px] w-full rounded-md bg-gray-50" />
        <div className="mt-4 flex flex-nowrap items-center gap-x-[17px]">
          <div className="h-[30px] w-[30px] rounded-md bg-gray-50" />
          <div className="h-[30px] w-[30px] rounded-md bg-gray-50" />
          <div className="h-[30px] w-[30px] rounded-md bg-gray-50" />
          <div className="h-[30px] w-[30px] rounded-md bg-gray-50" />
          <div className="h-[30px] w-[30px] rounded-md bg-gray-50" />
        </div>
        <div className="mt-4 h-[16px] w-20 rounded-md bg-gray-50" />
        <div className="mt-4 h-[28px] w-20 rounded-md bg-gray-50" />
        <div className="mt-4 h-10 w-full rounded-md bg-gray-50" />
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
