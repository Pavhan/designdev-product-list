import clsx from "clsx";
import React from "react";
import { Bar } from "../Bar/Bar";

export type ITab = Record<string, { label: string; content: JSX.Element }>;

interface ITabsProps {
  items: ITab;
}

export const Tabs = ({ items }: ITabsProps) => {
  const [activeTab, setActiveTab] = React.useState<string>(
    Object.keys(items)[0],
  );

  return (
    <>
      <div className="mb-10 flex justify-center">
        <div className="border-custom-balck-100/20 flex gap-x-0.5 rounded-button border">
          {Object.entries(items).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={clsx("-m-px rounded-button px-10 py-2 text-base", {
                "block bg-gradient-to-l from-custom-orange-400 to-custom-orange-500 font-bold text-white shadow-tab hover:bg-gradient-to-r":
                  activeTab === key,
                "hover:underline": activeTab !== key,
              })}
            >
              {value.label}
            </button>
          ))}
        </div>
      </div>
      <Bar text="Buy multiples original canine or human products" />
      {items[activeTab].content}
    </>
  );
};
