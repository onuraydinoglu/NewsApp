import { useParams } from "react-router-dom";
import Header from "../components/detail/Header";
import Content from "../components/detail/Content";
import NotFound from "./NotFound";

const NewsDetail = () => {
  const { id } = useParams();

  if (!id) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default NewsDetail;
