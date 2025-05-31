import { useNavigate } from "react-router-dom";
import Button from "../../../../shared/components/Button";

const UpdateCategory = () => {
  const navigate = useNavigate();

  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Category name"
        className="input input-bordered w-full max-w-xs"
        required
      />
      <div className="flex gap-4">
        <Button type="button" onClick={() => navigate("/dashboard/category")}>
          Cancel
        </Button>
        <Button type="submit">Update Category</Button>
      </div>
    </form>
  );
};

export default UpdateCategory;
