import { useAdminAuth } from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

import { getAdminInfo } from "../../api/Admin/admin";
import LoadingCom from "../Loading/LoadingCom";

const Header = () => {
  const { data: admin } = useAdminAuth();

  const { data, isPending } = useQuery({
    queryKey: ["adininfo", admin?.adminId],
    queryFn: () => getAdminInfo(admin?.adminId),
  });

  if (isPending) return <LoadingCom />;

  return (
    <header className="bg-white border-b border-gray-200  p-4">
      <div className="flex items-center justify-between">
        <div className="">
          <div className="py-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-indigo-900">LuxeAura</span>
          </div>{" "}
        </div>

        {/* Create New Button */}
        {/* <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-indigo-700 transition-colors">
          Create New
        </button> */}

        {/* Divider */}
        {/* <div className="hidden md:block w-px h-10 bg-gray-300 mx-6"></div> */}

        {/* User Profile */}
        <div className="hidden md:block">
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold text-gray-900">
                {data?.adminInfo?.firstName} {data?.adminInfo?.lastName}{" "}
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Store Admin
              </p>
            </div>
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-indigo-600 overflow-hidden">
              <p className="text-white font-bold text-md">
                {data?.adminInfo?.firstName[0]}
                {data?.adminInfo?.lastName[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
