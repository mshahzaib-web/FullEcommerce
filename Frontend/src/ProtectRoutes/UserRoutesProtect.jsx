import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserAuth } from "../hooks/useAuth";
import LoadingCom from "../components/Loading/LoadingCom";

export default function UserRoutesProtect() {
  const { data: user, isLoading } = useUserAuth();
  const location = useLocation();

  if (isLoading) {
    return <LoadingCom />; // Or a nice spinner component
  }

  if (!user) {
    // Redirect to login, but save the current location they were trying to go to
    return <Navigate to="/user/login" state={{ from: location }} replace />;
  }

  // If user exists, render the nested routes
  return <Outlet />;
}
