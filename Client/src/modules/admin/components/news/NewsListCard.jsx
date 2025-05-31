import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

import Button from "../../../../shared/components/Button";

import news from "../../../../shared/data/news";
import categories from "../../../../shared/data/categories";
import cities from "../../../../shared/data/cities";

const getCategoryName = (categoryId) => {
  const category = categories.find((cat) => cat.id === categoryId);
  return category ? category.name : "Bilinmeyen";
};

const getCityName = (cityId) => {
  const city = cities.find((c) => c.id === cityId);
  return city ? city.name : "bilinmeyen";
};

const NewsListCard = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Content</th>
            <th>Category Name</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {news.map((item, index) => (
            <tr key={item.id}>
              <th>{index + 1}</th>
              <td>{item.title}</td>
              <td>{item.content}</td>
              <td>{getCategoryName(item.category)}</td>
              <td>{getCityName(item.city)}</td>
              <td>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    className="btn-sm"
                    onClick={() => navigate("/dashboard/news/update")}
                  >
                    Edit
                    <FaEdit />
                  </Button>
                  <Button className="btn-sm btn-warning">
                    Delete
                    <FaTrash />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsListCard;
