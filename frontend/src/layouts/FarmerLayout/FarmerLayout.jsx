import { Outlet } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import Topbar from "../../components/layout/Topbar/Topbar";
import WatermarkBg from "../../components/common/WatermarkBg/WatermarkBg";

function FarmerLayout() {
  return (
    <div className="d-flex min-vh-100 bg-app">
      <Sidebar role="farmer" />
      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        <Topbar title="Farmer Producer Portal" />
        <main className="p-4 overflow-y-auto position-relative">
          <WatermarkBg opacity={0.045} className="h-100">
            <Outlet />
          </WatermarkBg>
        </main>
      </div>
    </div>
  );
}

export default FarmerLayout;