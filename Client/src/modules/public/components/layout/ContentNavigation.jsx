import { Link } from "react-router-dom";
import categories from "../../../../shared/data/categories";

const ContentNavigation = () => {
  return (
    <nav className="flex justify-between py-2">
      {categories.map((item) => (
        <Link key={item.id} to={item.path} className="nav-heading">
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default ContentNavigation;
