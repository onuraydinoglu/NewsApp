import { useLocation } from "react-router-dom";
import Title from "../../../../shared/components/Title";
import getCurrentCategory from "../../../../shared/utils/getCurrentCategory";

const Header = () => {
  const location = useLocation();

  const currentCategory = getCurrentCategory(location.pathname);

  return <Title>{currentCategory ? `${currentCategory.name} Haberleri` : "Haberler"}</Title>;
};

export default Header;
