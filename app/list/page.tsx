"use client";
import { useState } from "react";
import checkCode from "./checkCode"; // Adjust the file path as per your project structure

const Page = () => {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const enteredCode = event.target.elements["default-search"].value;
    const codeResult = checkCode(enteredCode);
    setResult(codeResult);
    console.log(searchValue)
  };

  return (
    <div style={{ height: "100vh" }}>
      <form className="m-9" onSubmit={handleSubmit}>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="input-form"
            placeholder="XTKB756838774908631V"
            required
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit" className="serach-btn">
            CHECK
          </button>
        </div>
      </form>
      {result && (
        <div className="text-green-800 p-4 mt-4">
          <p className="ml-7 mr-8 text-bold">{`${result}`}</p>
        </div>
      )}
    </div>
  );
};

export default Page;
