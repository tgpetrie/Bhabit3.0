import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import "./App.css";
// import {
//   SmartContractsSection,
//   TokenomicsSection,
//   ChallengeSection,
//   BornVaultSection,
//   RoadmapSection,
//   JoinSection,
// } from '../../../BhabitSiteSections' // Adjust the path if needed

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("unknown");
  const [showInfo, setShowInfo] = useState(true);
  const [userName, setUserName] = useState(""); // For the input form
  const [darkMode, setDarkMode] = useState(false); // <-- new state

  // Get current date and time
  const now = new Date().toLocaleString();

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* Dark mode toggle button */}
      <button
        className="toggle-dark-btn"
        onClick={() => setDarkMode((d) => !d)}
        style={{ position: "absolute", top: 20, right: 20 }}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://workers.cloudflare.com/" target="_blank">
          <img
            src={cloudflareLogo}
            className="logo cloudflare"
            alt="Cloudflare logo"
          />
        </a>
        <button
          className="toggle-info-btn"
          onClick={() => setShowInfo((v) => !v)}
        >
          {showInfo ? "Hide" : "Show"} My Info
        </button>
        {showInfo && (
          <div className="my-info">
            {/* Input form for user name */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setUserName(e.target.elements.username.value);
              }}
              style={{ marginBottom: "1em" }}
            >
              <input
                type="text"
                name="username"
                placeholder="Enter your name"
                defaultValue={userName}
                style={{
                  padding: "0.5em",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <button type="submit" style={{ marginLeft: "0.5em" }}>
                Set Name
              </button>
            </form>
            <p>
              <strong>Welcome!</strong> {userName ? userName : "[Your Name]"}
              <br />
              This is my first React + Cloudflare project.
              <br />
              Connect with me on{" "}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              !
            </p>
            <p>
              <em>Current date and time: {now}</em>
            </p>
          </div>
        )}
      </div>
      {/* 👇 Add a welcome message */}
      <h2>Thanks for visiting my project 🚀</h2>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          aria-label="increment"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button
          onClick={() => {
            fetch("/api/")
              .then((res) => res.json())
              .then((data) => setName(data.name));
          }}
          aria-label="get name"
        >
          Name from API is: {name}
        </button>
        <p>
          Edit <code>worker/index.js</code> to change the name
        </p>
      </div>
      {/* <SmartContractsSection />
      <TokenomicsSection />
      <ChallengeSection />
      <BornVaultSection />
      <RoadmapSection />
      <JoinSection /> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
