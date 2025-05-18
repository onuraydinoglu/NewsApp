import { useParams } from "react-router-dom";
import NewsSection from "../../../../shared/components/NewsSection";

import categories from "../../../../shared/data/categories";
import news from "../../../../shared/data/news";

const FeaturedNews = () => {
  const { slug } = useParams();
  const currentCategory = categories.find((c) => c.slug === slug);

  const categoryId = currentCategory?.id;

  const filteredNews = news.filter((item) => item.category === categoryId);

  return <NewsSection data={filteredNews} />;
};

export default FeaturedNews;
