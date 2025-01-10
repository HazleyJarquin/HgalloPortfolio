import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

import { AuroraBackground } from "@/components/ui/aurora-background";

export const MainLayout = () => {
  return (
    <AuroraBackground className="w-full h-[100vh] flex flex-col gap-3">
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      <div className="w-full h-full mt-[60px] overflow-y-auto p-10 relative">
        <Outlet />
      </div>
    </AuroraBackground>
  );
};
