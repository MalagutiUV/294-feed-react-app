import { Routes, Route } from "react-router";
import "./App.css";
import Navigation from "./layout/Navigation";

import Welcome from "./Welcome";

import LoginPage from "./auth/LoginPage";
import ProtectedRoute from "./auth/ProtectedRoutes";
import UserProfilePage from "./profile/UserProfilePage";
import FeedPage from "./posts/FeedPage";
import LogoutPage from "./auth/LogoutPage";
import PostCreatePage from "./posts/PostCreatePage";

function App() {
  return (
    <div className='container flex flex-col items-center mx-auto m-20'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='welcome' element={<Welcome />} />

        <Route path='auth/login' element={<LoginPage />} />
        <Route path='auth/logout' element={<LogoutPage />} />
        <Route
          path='/feed'
          element={
            <ProtectedRoute>
              <FeedPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <UserProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile/create'
          element={
            <ProtectedRoute>
              <PostCreatePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
