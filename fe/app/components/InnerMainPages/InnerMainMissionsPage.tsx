import React from "react";
import YourTags from "../MainPage/YourTags";
import MissionsInYourArea from "../MainPage/MissionsInYourArea";
import Recommendations from "../MainPage/Recommendations";
import InviteAFriend from "../MainPage/InviteAFriend";

const InnerMainMissionsPage = () => {
  return (
    <div className="flex flex-col overflow-y-auto overflow-x-hidden -200 space-y-2">
      <MissionsInYourArea />
      <Recommendations />
      <InviteAFriend />
      <YourTags tags={["Biology", "Space", "Warsaw", "Birds", "Easy-work"]} />
    </div>
  );
};

export default InnerMainMissionsPage;
