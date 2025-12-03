import { Routes, Route } from "react-router";
import "./App.css";
import Navigation from "./layout/Navigation";

import Map from "./Map";
import Welcome from "./Welcome";
import Users from "./Users";

import LoginPage from "./auth/LoginPage";
import ProtectedRoute from "./auth/ProtectedRoutes";
import UserProfilePage from "./profile/UserProfilePage";
import Feed from "./posts/Feed";

function App() {
  return (
    <div className='container'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='welcome' element={<Welcome />} />
        <Route path='map' element={<Map />} />
        <Route path='users' element={<Users />} />

        <Route path='auth/login' element={<LoginPage />} />
        <Route path='feed' element={<Feed />} />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <UserProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
