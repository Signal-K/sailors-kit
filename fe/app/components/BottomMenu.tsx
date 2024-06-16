import React, { ReactNode, useEffect, useRef } from "react";

export class BottomTab {
  constructor(public name: string, public icon: ReactNode) {}
}

interface BottomMenuProps {
  tabs: BottomTab[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomMenu = ({ tabs, activeTab, setActiveTab }: BottomMenuProps) => {
  const activeTabRef = useRef<HTMLDivElement>(null);
  const overlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTabRef.current && overlineRef.current) {
      const { offsetLeft, offsetWidth } = activeTabRef.current;
      overlineRef.current.style.left = `${offsetLeft}px`;
      overlineRef.current.style.width = `${offsetWidth}px`;
    }
  }, [activeTab]);

  const handleClick = (tab: string) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
  };

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleClick(tab.name)}
            ref={activeTab === tab.name ? activeTabRef : null}
            className={`flex flex-col items-center justify-center select-none ${
              activeTab === tab.name ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {tab.icon}
            <span className="text-sm text-blue-600 group-hover:text-blue-600">
              {tab.name}
            </span>
          </div>
        ))}
      </div>

      <div
        ref={overlineRef}
        className="absolute top-0 h-0.5 bg-blue-500 transition-all duration-300"
      ></div>
    </div>
  );
};

export default BottomMenu;
