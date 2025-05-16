import categories from "../../../../shared/data/categories";

const ContentNavigation = () => {
  return (
    <nav className="flex justify-between py-2">
      {categories.map((item) => (
        <a key={item.id} href="#" className="nav-heading">
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default ContentNavigation;
