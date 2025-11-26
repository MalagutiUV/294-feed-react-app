import { Routes, Route } from "react-router";
import "./App.css";
import Navigation from "./layout/Navigation";

import Map from "./Map";
import Welcome from "./Welcome";
import Users from "./Users";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='welcome' element={<Welcome />} />
        <Route path='map' element={<Map />} />
        <Route path='users' element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
