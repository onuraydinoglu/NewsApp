import { useParams } from "react-router-dom";
import Title from "../../../../shared/components/Title";
import categories from "../../../../shared/data/categories";

const Header = () => {
  const { slug } = useParams();
  const currentCategory = categories.find((c) => c.slug === slug);

  return <Title>{currentCategory ? `${currentCategory.name} Haberleri` : "Haberler"}</Title>;
};

export default Header;
