import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../../../shared/components/Button";
import { createNews } from "../../../../shared/services/newsService";
import { getCategories } from "../../../../shared/services/categoryService";
import cities from "../../../../shared/data/cities";

const AddNews = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
    category: "",
    city: "",
  });

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    await createNews(data);
    navigate("/dashboard/news");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input name="title" type="text" className="input" required onChange={handleChange} />
      <textarea name="content" className="textarea" required onChange={handleChange} />
      <input
        name="image"
        type="file"
        accept="image/*"
        className="file-input"
        required
        onChange={handleChange}
      />
      <select name="category" className="select" required onChange={handleChange}>
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>
      <select name="city" className="select" required onChange={handleChange}>
        <option value="">Select City</option>
        {cities.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <div className="flex gap-4">
        <Button type="button" onClick={() => navigate("/dashboard/news")}>
          Cancel
        </Button>
        <Button type="submit">Add News</Button>
      </div>
    </form>
  );
};

export default AddNews;
