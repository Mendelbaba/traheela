import { Route, Routes } from "react-router";
import "./App.css";
import FirstContact from "./components/FirstContact";
import SignIn from "./components/SignIn";
import Signup from "./components/SignUp";
function App() {
  return (
    <div className="App">
      <FirstContact />
      <Routes>
        <Route path="SignUp" element={<Signup />} />
        <Route path="SignIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
