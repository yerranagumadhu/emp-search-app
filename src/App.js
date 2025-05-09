// emp-search-app/src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [empId, setEmpId] = useState("");

  const handleSearch = () => {
    if (empId.trim()) {      
      const APP1_URL = window._env_?.BACKEND_URL;
      console.log("Backend URL:", APP1_URL);
      const empDetailsUrl = `${APP1_URL}/?empId=${empId}`;
      sessionStorage.setItem("empAccess", "true");
      window.open(empDetailsUrl, "_blank");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>🔍 Search Employee Details</h2>
        <input
          type="text"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
          placeholder="Enter Employee ID"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default App;
