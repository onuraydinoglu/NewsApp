import { useNavigate } from "react-router-dom";
import Button from "../../../../shared/components/Button";

import categories from "../../../../shared/data/categories";
import cities from "../../../../shared/data/cities";

const UpdateNews = () => {
  const navigate = useNavigate();
  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full max-w-xs"
        required
      />

      <textarea placeholder="Content" className="textarea" required />

      <select defaultValue="Select Category" className="select" required>
        <option disabled={true}>Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <select defaultValue="Select City" className="select" required>
        <option disabled={true}>Select City</option>
        {cities.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      <div>
        <input
          type="file"
          accept="image/*"
          className="file-input file-input-bordered w-full max-w-xs"
          required
        />
      </div>

      <div className="flex gap-4">
        <Button type="button" onClick={() => navigate("/dashboard/news")}>
          Cancel
        </Button>
        <Button type="submit">Update Category</Button>
      </div>
    </form>
  );
};

export default UpdateNews;
