import clsx from "clsx";
import React from "react";
import { Bar } from "../Bar/Bar";

export type ITab = Record<string, {label: string, content: JSX.Element}>;

interface ITabsProps {
  items: ITab;
}

export const Tabs = ({ items }: ITabsProps) => {
  const [activeTab, setActiveTab] = React.useState<string>(Object.keys(items)[0]);

  return <>
    <div className="flex justify-center mb-10">
      <div className="flex border border-custom-balck-100/20 rounded-[14px] gap-x-0.5">
        {Object.entries(items).map(([key, value]) =>
          <button 
            key={key} 
            onClick={() => setActiveTab(key)} 
            className={clsx("text-base py-2 px-10 rounded-[14px] -m-px", 
              { "bg-gradient-to-l from-custom-orange-400 to-custom-orange-500 block text-white font-bold hover:bg-gradient-to-r shadow-tab": activeTab === key,
                "hover:underline": activeTab !== key,
              })
            }>
            {value.label}
          </button>)
        }
      </div>
    </div>
    <Bar text="Buy multiples original canine or human products" />
    {(items[activeTab]).content}
  </>;
};