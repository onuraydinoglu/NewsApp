import { useParams } from "react-router-dom";

import Content from "../components/detail/Content";
import Header from "../components/detail/Header";
import NotFound from "./NotFound";

import news from "../../../shared/data/news";

const NewsDetail = () => {
  const { slug } = useParams();
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return <NotFound />;
  }

  return (
    <>
      <Header article={article} />
      <Content article={article} />
    </>
  );
};

export default NewsDetail;
