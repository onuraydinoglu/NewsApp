import { useNavigate } from "react-router-dom";
import PageHeader from "../../../../shared/components/PageHeader";
import NewsListCard from "./NewsListCard";

const NewsSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader title="News" onClick={() => navigate("/dashboard/news/add")} />

      <NewsListCard />
    </>
  );
};

export default NewsSection;
