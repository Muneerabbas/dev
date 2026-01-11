import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async () => {
    if (!inputValue.trim()) {
      alert("Input cannot be empty");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: inputValue }),
      });

      const data = await response.json();
      console.log("Success:", data);
      setInputValue(""); // clear input
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Type something..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button onClick={handleSubmit}>Submit</button>
        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
