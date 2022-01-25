import { Route, Routes } from "react-router";
import "./App.css";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginUser = () => setIsLoggedIn(!isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("id")) {
      loginUser();
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="*"
          element={
            isLoggedIn ? <Dashboard /> : <LandingPage logFunction={loginUser} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
