import { useLocation } from "react-router-dom";
import NewsSection from "../../../../shared/components/NewsSection";

import news from "../../../../shared/data/news";
import getCurrentCategory from "../../../../shared/utils/getCurrentCategory";

const FeaturedNews = () => {
  const location = useLocation();

  const currentCategory = getCurrentCategory(location.pathname);

  // Eğer kategori bulunduysa, ona ait id'yi al
  const categoryId = currentCategory.id;

  // O kategoriye ait haberleri filtrele
  const filterNews = news.filter((item) => item.category === categoryId);

  return <NewsSection data={filterNews} />;
};

export default FeaturedNews;
