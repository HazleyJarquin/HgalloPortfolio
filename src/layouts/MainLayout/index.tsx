import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

import mainBg from "../../../public/images/BgPortfolio.png";

export const MainLayout = () => {
  return (
    <div
      className="w-full h-[100vh] flex flex-col gap-3"
      style={{
        backgroundImage: `url(${mainBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      <div className="w-full h-full mt-[60px] overflow-y-auto p-10">
        <Outlet />
      </div>
    </div>
  );
};
