import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Item from "./components/item";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [savedValues, setSavedValues] = useLocalStorage("savedValues", []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>CopiFast</h1>
      <div className="card">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          onClick={() => {
            setSavedValues((prev: string) => [...(prev || []), value]);
            setValue("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        {savedValues?.map((value: string, index: number) => (
          <div key={value}>
            <span>{value}</span>
            <Item value={value} />
            <button
              onClick={() =>
                setSavedValues((prev: string) => [
                  ...prev.slice(0, index),
                  ...prev.slice(index + 1),
                ])
              }
            >
              <span>Remove</span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
