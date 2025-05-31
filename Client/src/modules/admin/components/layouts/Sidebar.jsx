import { FaHome, FaThLarge, FaNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-[#F0F0F0] w-72 border-r border-gray-300 min-h-screen">
      <div className="drawer sm:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button sm:hidden">
            Open Sidebar
          </label>
        </div>
        <div className="drawer-side">
          <div className="w-full text-2xl inter-bold px-7 py-5">
            <Link to="/dashboard" className="text-5xl nav-icon">
              News App
            </Link>
          </div>
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu text-base-content w-64 mt-3 p-4 space-y-2">
            <li className="w-full">
              <Link to="/dashboard" className="flex items-center gap-5">
                <FaHome size={20} /> Ana Sayfa
              </Link>
            </li>

            <div className="divider my-2"></div>

            <div className="my-3 ms-3">
              <h2 className="text-xs">Yönetim</h2>
            </div>

            <li>
              <Link to="/dashboard/category" className="flex items-center gap-5">
                <FaThLarge size={20} /> Kategori
              </Link>
            </li>
            <li>
              <Link to="/dashboard/news" className="flex items-center gap-5">
                <FaNewspaper size={20} /> Haberler
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
