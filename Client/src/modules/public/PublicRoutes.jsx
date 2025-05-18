import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layouts from "./layouts/Layout";
import Home from "../public/pages/Home";
import NewsPage from "./pages/NewsPage";
import NewsDetail from "./pages/NewsDetail";

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path=":slug" element={<NewsPage />} />
          <Route path="/haber/:slug" element={<NewsDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
