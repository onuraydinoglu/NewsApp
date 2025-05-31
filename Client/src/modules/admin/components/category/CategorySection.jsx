import { useNavigate } from "react-router-dom";
import PageHeader from "../../../../shared/components/PageHeader";
import CategoryListCard from "./CategoryListCard";

const CategorySection = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader title="Category" onClick={() => navigate("/dashboard/category/add")} />

      <CategoryListCard />
    </>
  );
};

export default CategorySection;
