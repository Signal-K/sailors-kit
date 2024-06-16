import React from "react";

const MissionsInYourArea = () => {
  return (
    <section className="flex flex-col justify-center items-center pb-2 bg-white overflow-hidden">
      <h3 className="text-xl m-2 text-blue-500 font-semibold">
        Missions in your area!
      </h3>
      <div className="overflow-x-auto w-[100%]">
        <div className="flex space-x-4 px-2">
          <div className="bg-blue-100 text-blue-700 p-4 rounded-lg flex flex-col items-center justify-between w-32 h-40 flex-shrink-0">
            <div className="text-blue-600 text-lg">
              Take a photo of an exotic bird
            </div>
            <div className="text-xl text-blue-700">500 pt</div>
          </div>
          <div className="bg-blue-100 text-blue-700 p-4 rounded-lg flex flex-col items-center justify-between w-32 h-40 flex-shrink-0">
            <div className="text-blue-600 text-lg">
              Analyze the photos of Mars
            </div>
            <div className="text-xl text-blue-700">300 pt</div>
          </div>
          <div className="bg-blue-100 text-blue-700 p-4 rounded-lg flex flex-col items-center justify-between w-32 h-40 flex-shrink-0">
            <div className="text-blue-600 text-lg">
              Stand as a background of a movie
            </div>
            <div className="text-xl text-blue-700">2000 pt</div>
          </div>
          <div className="bg-blue-100 text-blue-700 p-4 rounded-lg flex  flex-col items-center justify-between w-32 h-40 flex-shrink-0">
            <div className="text-blue-600 text-lg">
              Analyze the photos of a black hole
            </div>
            <div className="text-xl text-blue-700">600 pt</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionsInYourArea;
