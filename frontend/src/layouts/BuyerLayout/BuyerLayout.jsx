import { Outlet } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import Topbar from "../../components/layout/Topbar/Topbar";
import WatermarkBg from "../../components/common/WatermarkBg/WatermarkBg";

function BuyerLayout() {
  return (
    <div className="d-flex min-vh-100 bg-app">
      <Sidebar role="buyer" />
      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        <Topbar title="Buyer Portal" />
        <main className="p-4 overflow-y-auto position-relative">
          <WatermarkBg opacity={0.045} className="h-100">
            <Outlet />
          </WatermarkBg>
        </main>
      </div>
    </div>
  );
}

export default BuyerLayout;