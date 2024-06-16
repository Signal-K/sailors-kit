import React, { useEffect, useRef } from "react";

interface TabsProps {
  tabs: { [index: string]: React.ReactNode };
  activeTab: string;
}

const Tabs = ({ tabs, activeTab }: TabsProps) => {
  useEffect(() => {}, [activeTab]);

  return (
    <div className="relative">
      {Object.keys(tabs).map((tab, index) => (
        <div key={index} className={`${tab === activeTab ? "" : "hidden"}`}>
          {tabs[tab]}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
