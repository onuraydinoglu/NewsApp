import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layouts from "./layouts/Layout";
import Home from "../public/pages/Home"; // Home = Son Dakika
import NewsPage from "./pages/NewsPage"; // Tek tasarım
import NewsDetail from "./pages/NewsDetail";

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} /> {/* Son Dakika */}
          <Route path="dunya" element={<NewsPage categor="dunya" />} />
          <Route path="ekonomi" element={<NewsPage category="ekonomi" />} />
          <Route path="spor" element={<NewsPage category="spor" />} />
          <Route path="magazin" element={<NewsPage category="magazin" />} />
          <Route path="politika" element={<NewsPage category="politika" />} />
          <Route path="finans" element={<NewsPage category="finans" />} />
          <Route path="teknoloji" element={<NewsPage category="teknoloji" />} />
          <Route path="kultur-sanat" element={<NewsPage category="kultur-sanat" />} />
          <Route path="otomobil" element={<NewsPage category="otomobil" />} />
          <Route path="turizm" element={<NewsPage category="turizm" />} />
          <Route path="ucuncu-sayfa" element={<NewsPage category="ucuncu-sayfa" />} />
          <Route path="/haber/:id" element={<NewsDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
