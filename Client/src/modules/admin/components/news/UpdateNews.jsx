import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNewsById, updateNews } from "../../../../shared/services/newsService";
import { getCategories } from "../../../../shared/services/categoryService";
import Button from "../../../../shared/components/Button";
import cities from "../../../../shared/data/cities";

const UpdateNews = () => {
  const { id } = useParams();
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
    getNewsById(id).then((res) => {
      const news = res.data;

      setFormData({
        title: news.title,
        content: news.content,
        image: news.image,
        city: news.city,
        category: news.category?._id || "", // burada sadece id'yi alıyoruz
      });
    });

    getCategories().then((res) => setCategories(res.data));
  }, [id]);

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
    await updateNews(id, data);
    navigate("/dashboard/news");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="input"
        required
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        className="textarea"
        required
      />
      <input
        name="image"
        type="file"
        accept="image/*"
        className="file-input"
        onChange={handleChange}
      />
      <select name="category" value={formData.category} onChange={handleChange} className="select">
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>
      <select name="city" value={formData.city} onChange={handleChange} className="select">
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
        <Button type="submit">Update News</Button>
      </div>
    </form>
  );
};

export default UpdateNews;
