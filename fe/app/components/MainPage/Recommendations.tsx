import React from "react";

const Recommendations = () => {
  return (
    <section className="flex flex-col justify-center items-center pb-2 bg-white overflow-hidden">
      <h3 className="text-xl m-2 text-blue-600 font-semibold">
        Recommendations!
      </h3>
      <div className="bg-blue-100 p-4 rounded-lg flex flex-col items-center justify-center">
        <div className="text-blue-600 text-lg">
          Stand as background of a movie
        </div>
        <div className="text-2xl text-blue-700">2000 pt</div>
      </div>
    </section>
  );
};

export default Recommendations;
