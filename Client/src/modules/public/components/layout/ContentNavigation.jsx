import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../../../shared/services/categoryService";

const ContentNavigation = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);

      setCategories(res.data); // ✅ _id ismini değiştirme!
    } catch (error) {
      console.error("Kategori verileri alınamadı:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <nav className="flex justify-between py-2">
      {categories.map((item) => (
        <Link
          key={item._id} // ✅ burada artık item.id değil
          to={item._id === "683af9ae454898340001215b" ? "/" : `/kategori/${item._id}`} // ✅ id değil _id
          className="nav-heading"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default ContentNavigation;
