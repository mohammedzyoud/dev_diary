import React from "react";
import UserList from "./components/UserList/UserList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;

const [darkMode, setDarkMode] = useState(false);
return (
  <div className={`App ${darkMode ? "dark" : ""}`}>
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
    <UserList />
  </div>
);

