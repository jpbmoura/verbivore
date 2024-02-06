import React from "react";

import { FiMoon, FiSun, FiVolume2 } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { Words } from "./intefaces/words";

function App() {
  const [isDarkMode, setDarkMode] = React.useState<boolean>(false);
  const [searchWord, serSearchWord] = React.useState<string>("");
  const [word, setWord] = React.useState<Words>();
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((res) => res.json())
      .then((data) => setWord(data[0]));
    setLoading(false);
  };

  const handlePlayAudio = async (audio: string) => {
    const audioEl = new Audio(audio);
    audioEl.play();
  };

  return (
    <>
      <div className={`${isDarkMode ? "dark" : undefined}`}>
        <div className="flex min-h-screen flex-col items-center justify-center bg-emerald-50 transition-all dark:bg-emerald-950 ">
          <div className="w-full max-w-lg px-6 md:p-0">
            <div className="flex flex-row items-center justify-between py-8">
              <div className="flex flex-row items-baseline gap-2 text-emerald-900 dark:text-emerald-500">
                <h1 className="text-2xl hover:cursor-default">verbivore</h1>
                <FaLeaf
                  className={`${
                    word &&
                    "animate-bounce text-emerald-500 dark:text-emerald-300"
                  }`}
                />
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

            {word && (
              <div className="mt-4 rounded-md bg-white p-6 mb-8 text-emerald-900 shadow-md dark:bg-emerald-900 dark:text-emerald-50">
                <div>
                  <div className="text-3xl font-bold ">{word?.word}</div>
                  <div className="text-sm text-gray-500 dark:text-emerald-500">
                    {word?.phonetic}
                  </div>
                </div>
                <div className="text-sm gap-10">
                  {word?.meanings.map((meaning, index) => (
                    <div key={index} className="mt-10">
                      <div className="text-lg font-semibold">
                        {meaning.partOfSpeech}
                      </div>
                      <div>
                        {meaning.definitions.map((definition, index) => (
                          <div key={index} className="pt-2">
                            <div className="text-gray-500 dark:text-emerald-400">
                              {definition.definition}
                            </div>
                            <div className="italic pl-1 text-emerald-400 dark:text-emerald-50">
                              {definition.example}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => handlePlayAudio(word.phonetics[0].audio)}
                    className="rounded-full p-2 text-lg transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-800"
                  >
                    <FiVolume2 />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
