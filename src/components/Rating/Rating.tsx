import React from "react";
import clsx from "clsx";

interface IRatingProps {
  value: number;
}

export const Rating = ({ value }: IRatingProps) => {
  const roundedValue = Math.round(value);

  return (
    <div className="flex flex-nowrap items-center gap-x-[17px]">
      <div className="flex flex-nowrap gap-1.5">
        {Array.from(Array(5).keys()).map((index) => {
          const isHighlighted = roundedValue >= index + 1;

          return (
            <span
              key={index}
              className={clsx("inline-block h-[30px] w-[30px]", {
                "fill-custom-green-100": isHighlighted,
                "fill-gray-200": !isHighlighted,
              })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 27">
                <path d="M14 21.825 6.13 26.23a.5.5 0 0 1-.735-.533l1.758-8.847L.53 10.726a.5.5 0 0 1 .28-.864L9.768 8.8 13.546.61a.5.5 0 0 1 .908 0l3.779 8.19 8.957 1.062a.5.5 0 0 1 .28.864l-6.622 6.124 1.757 8.847a.5.5 0 0 1-.735.534L14 21.825Z" />
              </svg>
            </span>
          );
        })}
      </div>
      <span className="text-base font-medium leading-6">{value}</span>
    </div>
  );
};
