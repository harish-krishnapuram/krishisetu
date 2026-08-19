import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import WatermarkBg from "../components/common/WatermarkBg/WatermarkBg";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-app">
      <Navbar />
      <main className="flex-grow-1 position-relative">
        <WatermarkBg opacity={0.045} className="min-vh-100">
          <Outlet />
        </WatermarkBg>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
