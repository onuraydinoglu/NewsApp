import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

import Header from "../components/news/Header";
import FeaturedNews from "../components/news/FeaturedNews";
import OtherNewsList from "../components/news/OtherNewsList";

import categories from "../../../shared/data/categories";

const NewsPage = () => {
  const { slug } = useParams();
  const currentCategory = categories.find((c) => c.slug === slug);

  if (!currentCategory) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <FeaturedNews />
      <OtherNewsList />
    </>
  );
};

export default NewsPage;
