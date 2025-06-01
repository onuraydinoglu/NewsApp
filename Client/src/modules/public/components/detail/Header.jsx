import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Subtitle from "../../../../shared/components/Subtitle";
import { getNewsById } from "../../../../shared/services/newsService";

const Header = () => {
  const { id } = useParams();
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

  if (loading) return null;
  if (!article) return <p>Haber Bulunamadı.</p>;

  return <Subtitle className="text-center py-10">{article.title}</Subtitle>;
};

export default Header;
