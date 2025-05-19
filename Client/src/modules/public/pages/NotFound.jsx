import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold my-2">Sayfa Bulunamadı</h2>
      <p className="text-gray-600 mb-6">Üzgünüz, aradığınız sayfa mevcut değil.</p>
      <Link to="/" className="text-blue-500 underline">
        Ana sayfaya dön
      </Link>
    </div>
  );
};

export default NotFound;
