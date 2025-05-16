import Footer from "../components/layout/Footer";
import GlobalHeader from "../components/layout/GlobalHeader";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow container mx-auto">
        <GlobalHeader />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
