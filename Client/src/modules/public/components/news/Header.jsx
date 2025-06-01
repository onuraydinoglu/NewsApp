import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../../../shared/components/Title";
import { getCategories } from "../../../../shared/services/categoryService";

const Header = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCategories();
      setCategories(res.data);
    };
    fetchData();
  }, []);

  const currentCategory = categories.find((c) => c._id === id);

  return <Title>{currentCategory ? `${currentCategory.name} Haberleri` : "Haberler"}</Title>;
};

export default Header;
