import React from "react";
import ImagesInput from "../ImagesInput";

const CreateMissionPage = () => {
  return (
    <main className="text-blue-700 flex flex-col items-center space-y-4 px-4">
      <h1 className="text-3xl mt-4 mb-2">Create Mission</h1>
      <div className="w-full relative group">
        <input
          type="text"
          id="title"
          maxLength={50}
          required
          className="w-full h-10 px-4 peer -100 outline-none"
        />
        <label className="transform select-none transition-all absolute top-0 left-0 h-full flex items-center pl-2 group-focus-within:text-sm group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 pointer-events-none">
          Title
        </label>
      </div>
      <div className="w-full relative group">
        <textarea
          id="aim"
          maxLength={500}
          required
          className="w-full h-10 px-4 peer -100 outline-none pt-2"
        />
        <label className="transform select-none transition-all absolute top-0 left-0 h-full flex items-center pl-2 group-focus-within:text-sm group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 pointer-events-none">
          Aim of project? Why is it important?
        </label>
      </div>
      <hr className="w-full -500 h-0.5 select-none" />
      <h2 className="text-lg">Describe output you need</h2>

      <div className="w-full relative group">
        <textarea
          id="expectedResponse"
          maxLength={2000}
          required
          className="w-full h-10 px-4 peer -100 outline-none pt-2"
        />
        <label className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 group-focus-within:text-sm group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 pointer-events-none">
          Describe ideal and wrong output.
        </label>
      </div>
      <div className="w-full relative group">
        <textarea
          id="sampleResponse"
          maxLength={5000}
          required
          className="w-full h-10 px-4 peer -100 outline-none pt-2"
        />
        <label className="transform select-none transition-all absolute top-0 left-0 h-full flex items-center pl-2 group-focus-within:text-sm group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 pointer-events-none">
          *Sample response from a user*
        </label>
      </div>
      <ImagesInput />
      <hr className="w-full -500 h-0.5 select-none mb-2" />
      <div className="w-full relative group">
        <input
          type="number"
          id="bounty"
          maxLength={9}
          required
          className="w-full h-10 px-4 peer -100 outline-none"
        />
        <label className="transform select-none transition-all absolute top-0 left-0 h-full flex items-center pl-2 group-focus-within:text-sm group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 pointer-events-none">
          Bounty budget (in US Dollars)
        </label>
      </div>
      <div className="flex w-full justify-between items-center pt-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Save
        </button>
        <div className="flex flex-col space-y-1">
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">
            Publish
          </button>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Plan publish
          </button>
        </div>
      </div>
    </main>
  );
};

export default CreateMissionPage;
