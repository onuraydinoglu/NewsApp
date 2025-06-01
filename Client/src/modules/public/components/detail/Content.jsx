import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNewsById } from "../../../../shared/services/newsService";

const Content = () => {
  const { id } = useParams(); // artık slug yerine id geliyor
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await getNewsById(id);
        setArticle(res.data);
      } catch (err) {
        console.error("Haber başlığı yüklenemedi:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) return <p>Yükleniyor...</p>;
  if (!article) return <p>Haber bulunamadı.</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <img
        src={`http://localhost:5000${article.image}`}
        alt={article.title}
        className="w-full h-72 object-cover rounded"
      />
      <p className="mt-4 text-lg text-gray-700">{article.content}</p>
    </div>
  );
};

export default Content;
