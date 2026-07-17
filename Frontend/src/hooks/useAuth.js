import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../api/User/user";

export const useAuth = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: false,
  });
};
