import { getAdminUser, logoutAdmin } from "../../../auth/services/authService";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const admin = getAdminUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin-login");
  };

  return (
    <div className="navbar bg-[#F0F0F0] w-full">
      <div className="flex-1">
        <a className="btn btn-sm ms-5">Haberin Kaynağı</a>
      </div>
      <div className="flex grow justify-end px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm rounded-field">
              {admin?.name} {admin?.surname}
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
            >
              <li>
                <button onClick={handleLogout}>Çıkış Yap</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
