import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../shared/components/Button";
import { getCategory, updateCategory } from "../../../../shared/services/categoryService";

const UpdateCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");

  useEffect(() => {
    getCategory(id).then((res) => setName(res.data.name));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCategory(id, { name });
    navigate("/dashboard/category");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category name"
        className="input input-bordered w-full max-w-xs"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
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
