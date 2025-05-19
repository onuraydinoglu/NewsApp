import { Outlet } from "react-router-dom";
import GlobalHeader from "../components/layout/GlobalHeader";
import Footer from "../components/layout/Footer";

const Layouts = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto">
        <GlobalHeader />
      </div>

      <main className="flex-grow container mx-auto">
        <Outlet />
      </main>

      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
