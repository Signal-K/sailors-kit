import React from "react";
import TopMenu from "../MainPage/TopMenu";
import MissionsInYourArea from "../MainPage/MissionsInYourArea";
import InnerMainMissionsPage from "../InnerMainPages/InnerMainMissionsPage";
import InviteAFriend from "../MainPage/InviteAFriend";
import Tabs from "../TabsSystem/Tabs";
import InnerMainProfilePage from "../InnerMainPages/InnerMainProfilePage";
import { WalletComp } from "./wallet-comp";
import { Wallet } from "@/components/wallet";
import { MissionList } from "@/components/mission-list";
import { SubmitMission } from "@/components/submit-mission";
import { ProfileComp } from "@/components/profile-comp";

const HomePage = () => {
  const [activeTab, setActiveTab] = React.useState<string>("Missions");

  return (
    <main className="flex-grow overflow-y-auto overflow-x-hidden -200 pb-2 min-h-80 space-y-2">
      <TopMenu
        tabs={["Wallet", "Missions", "Create", "Profile"]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Tabs
        tabs={{
          Wallet: <Wallet />,
          Missions: <MissionList />,
          Create: <SubmitMission />,
          Profile: <ProfileComp />,
        }}
        activeTab={activeTab}
      />
    </main>
  );
};

export default HomePage;
