import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../api/User/user";
import { getCurrentAdmin } from "../api/Admin/admin";

export const useUserAuth = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: false,
  });
};

export const useAdminAuth = () => {
  return useQuery({
    queryKey: ["admin"],
    queryFn: getCurrentAdmin,
    retry: false,
  });
};
