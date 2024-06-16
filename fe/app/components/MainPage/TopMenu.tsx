import React, { useEffect, useRef } from "react";

interface TopMenuProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TopMenu = ({ tabs, activeTab, setActiveTab }: TopMenuProps) => {
  const activeTabRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTabRef.current && underlineRef.current) {
      const { offsetLeft, offsetWidth } = activeTabRef.current;
      underlineRef.current.style.left = `${offsetLeft}px`;
      underlineRef.current.style.width = `${offsetWidth}px`;
    }
  }, [activeTab]);

  const handleClick = (tab: string) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
  };

  return (
    <div className="relative flex flex-col justify-center h-14 bg-white border-b border-gray-200">
      <div className="flex items-center justify-around">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleClick(tab)}
            ref={activeTab === tab ? activeTabRef : null}
            className={`px-4 py-2 select-none ${
              activeTab === tab ? "text-blue-500" : "text-gray-500"
            }`}
          >
            <span>{tab}</span>
          </div>
        ))}
      </div>
      <div
        ref={underlineRef}
        className="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300"
      ></div>
    </div>
  );
};

export default TopMenu;
