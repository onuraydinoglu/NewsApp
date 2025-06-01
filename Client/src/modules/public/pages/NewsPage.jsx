import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

import Header from "../components/news/Header";
import FeaturedNews from "../components/news/FeaturedNews";
import OtherNewsList from "../components/news/OtherNewsList";

import { getCategories } from "../../../shared/services/categoryService";

const NewsPage = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategories();
      setCategories(res.data);
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const currentCategory = categories.find((c) => c._id === id);

  if (loading) return null;

  if (!currentCategory) return <NotFound />;

  return (
    <>
      <Header />
      <FeaturedNews />
      <OtherNewsList />
    </>
  );
};

export default NewsPage;
