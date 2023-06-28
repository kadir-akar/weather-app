import React from "react";
import { ChangeEvent } from "react";

import { optionType } from "@/types";

type Props = {
  term: string;
  options: string[];
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onOptionSelect: (option: optionType) => void;
};

const Search = ({
  term,
  options,
  onInputChange,
  onSubmit,
  onOptionSelect,
}: Props): JSX.Element => {
  return (
    <div
      className="relative bg-opacity-60
    bg-blue-200
    rounded-lg
    shadow-lg
    p-1"
    >
      <form className="p-7 rounded z-10" onSubmit={onSubmit}>
        <div className="relative items-center">
          <input
            onChange={onInputChange}
            type="search"
            id="default-search"
            className=" block pl-4 p-2 text-sm text-gray-900 border rounded bg-gray-10 border-gray-100 focus:outline-none"
            placeholder="Search"
            maxLength={20}
            value={term}
            required
          ></input>
          <button
            type="submit"
            placeholder="Search"
            className="
                absolute top-0 right-0 
                p-2 ml-2 text-sm font-medium text-white bg-blue-500  rounded-r border border-blue-700   "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </form>
      <ul
        className="
        z-10
      top-9 bg-white bg-opacity-60 bg-blue-200 rounded"
      >
        {options.map(
          (option: any, index: number): JSX.Element => (
            <li
              key={option.name + "-" + index}
              onClick={() => onOptionSelect(option)}
            >
              <button className=" text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer p-1">
                {option.name}, {option.country}
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Search;
