import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "../../../../shared/components/Button";
import { getNews, deleteNews } from "../../../../shared/services/newsService";
import cities from "../../../../shared/data/cities";

const getCityName = (cityId) => {
  const city = cities.find((c) => c.id == cityId);
  return city ? city.name : "Bilinmeyen";
};

const NewsListCard = () => {
  const navigate = useNavigate();
  const [newsList, setNewsList] = useState([]);

  const fetchNews = async () => {
    const res = await getNews();
    setNewsList(res.data);
  };

  const handleDelete = async (id) => {
    await deleteNews(id);
    fetchNews();
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Content</th>
            <th>Category</th>
            <th>City</th>
            <th>İmage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {newsList.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.content}</td>
              <td>{item.category?.name}</td>
              <td>{getCityName(item.city)}</td>
              <td>
                {item.image ? (
                  <img
                    src={`http://localhost:5000${item.image}`}
                    alt={item.title}
                    className="w-20 h-14 object-cover rounded"
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td>
                <div className="flex gap-2">
                  <Button
                    onClick={() => navigate(`/dashboard/news/update/${item._id}/${item.slug}`)}
                    className="btn-sm"
                  >
                    Edit <FaEdit />
                  </Button>
                  <Button onClick={() => handleDelete(item._id)} className="btn-sm btn-warning">
                    Delete <FaTrash />
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
