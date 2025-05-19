import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layouts from "./layouts/Layout";
import Home from "../public/pages/Home";
import NewsPage from "./pages/NewsPage";
import NewsDetail from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path=":slug" element={<NewsPage />} />
          <Route path="haber/:slug" element={<NewsDetail />} />
          {/* DİKKAT: Bu Layouts İçinde */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
