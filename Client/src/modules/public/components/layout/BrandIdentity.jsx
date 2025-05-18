import { Link } from "react-router-dom";

const BrandIdentity = () => {
  return (
    <div className="flex py-8">
      <div className="navbar-start text-sm nav-heading">Perşembe, May 15, 2025</div>
      <div className="navbar-center">
        <Link to="/" className="text-6xl nav-icon">
          NewsApp
        </Link>
      </div>
      <div className="navbar-end text-sm nav-heading">Hava Durumu</div>
    </div>
  );
};

export default BrandIdentity;
