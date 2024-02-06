import React from "react";

import { FiMoon, FiSun, FiVolume2 } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

function App() {
  const [isDarkMode, setDarkMode] = React.useState<boolean>(false);
  const [searchWord, serSearchWord] = React.useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchWord);
  };
  return (
    <>
      <div className={`${isDarkMode ? "dark" : undefined}`}>
        <div className="flex min-h-screen flex-col items-center justify-center bg-emerald-50 transition-all dark:bg-emerald-950">
          <div className="w-full max-w-md px-6 md:p-0">
            <div className="flex flex-row items-center justify-between pb-8">
              <div className=" flex flex-row items-baseline gap-2 text-emerald-900 dark:text-emerald-500">
                <h1 className="text-2xl hover:cursor-default">verbivore</h1>
                <FaLeaf className="hover:animate-pulse" />
              </div>

              <div>
                <button
                  onClick={() => setDarkMode((prev) => !prev)}
                  className="rounded-md p-2 "
                >
                  {isDarkMode ? (
                    <FiMoon className="transition-color text-2xl text-emerald-500 hover:fill-current" />
                  ) : (
                    <FiSun className="transition-color text-2xl text-emerald-900 hover:fill-current" />
                  )}
                </button>
              </div>
            </div>
            <form
              onSubmit={(e) => handleSearch(e)}
              className="flex items-center gap-2 rounded-md bg-white shadow-md dark:bg-emerald-900"
            >
              <input
                className="decoration-none flex-1 rounded-md bg-transparent px-6 py-2 pr-2 text-emerald-900 placeholder-gray-500 outline-none dark:text-emerald-200 dark:placeholder-emerald-500"
                placeholder="Search for a word..."
                onChange={(e) => serSearchWord(e.target.value)}
              />
            </form>

            <div className="mt-4 rounded-md bg-white p-6 text-emerald-900 shadow-md dark:bg-emerald-900 dark:text-emerald-50">
              <div>
                <div className="text-xl font-semibold">Word</div>
                <div className="text-sm text-gray-500 dark:text-emerald-500">
                  /pronunciation/
                </div>
              </div>
              <div className="text-sm">
                <p>Definition: A brief explanation of the meaning of a word.</p>
                <p>Example: This is an example sentence using the word.</p>
              </div>
              <div className="flex items-center justify-end">
                <button className="rounded-full p-2 text-lg transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-800">
                  <FiVolume2 />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
