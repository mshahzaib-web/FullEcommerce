import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAdminAuth } from "../hooks/useAuth";
import LoadingCom from "../components/Loading/LoadingCom";

export default function AdminRoutesProtect() {
  const { data: admin, isLoading } = useAdminAuth();
  const location = useLocation();

  if (isLoading) {
    return <LoadingCom />; // Or a nice spinner component
  }

  if (!admin) {
    // Redirect to login, but save the current location they were trying to go to
    return <Navigate to="admin/login" state={{ from: location }} replace />;
  }

  // If user exists, render the nested routes
  return <Outlet />;
}
