import { Navigate } from "react-router";

export default function ProtectedRoute({ children }: { children: any }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to='/auth/login' replace />;
  }

  return children;
}
