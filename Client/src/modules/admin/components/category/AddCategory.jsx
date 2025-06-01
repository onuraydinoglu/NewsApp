import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../../../shared/components/Button";
import { createCategory } from "../../../../shared/services/categoryService";

const AddCategory = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCategory({ name });
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
        <Button type="submit">Add Category</Button>
      </div>
    </form>
  );
};

export default AddCategory;
