import clsx from "clsx";
import React from "react";
import { Bar } from "../Bar/Bar";

interface ITabsProps {
  items: Record<string, { label: string; content: JSX.Element }>;
}

export const Tabs = ({ items }: ITabsProps) => {
  const [activeTab, setActiveTab] = React.useState<string>(
    Object.keys(items)[0],
  );

  return (
    <>
      <div className="mb-10 flex justify-center">
        <div className="border-custom-balck-100/20 flex gap-x-0.5 rounded-button border" role="tablist" aria-label="Product list tabs">
          {Object.entries(items).map(([key, value]) => {
            const isActive = activeTab === key;
            return <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={clsx("-m-px rounded-button px-10 py-2 text-base", {
                "block bg-gradient-to-l from-custom-orange-500 to-custom-orange-400 font-bold text-white shadow-tab hover:bg-gradient-to-r":
                isActive,
                "hover:underline": !isActive,
              })}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${key}`}
              id={`tab-${key}`}
              tabIndex={isActive ? 0 : -1}
            >
              {value.label}
            </button>;
          })}
        </div>
      </div>
      <Bar text="Buy multiples original canine or human products" />
      <div id={`panel-${activeTab}`} role="tabpanel" tabIndex={0} aria-labelledby={`tab-${activeTab}`} className="focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-1 focus-visible:outline-violet-500">
        {items[activeTab].content}
      </div>
    </>
  );
};
