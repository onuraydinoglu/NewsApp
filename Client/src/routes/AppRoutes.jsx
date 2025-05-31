// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public
import PublicLayout from "../modules/public/layouts/Layout";
import Home from "../modules/public/pages/Home";
import NewsPage from "../modules/public/pages/NewsPage";
import NewsDetail from "../modules/public/pages/NewsDetail";
import NotFound from "../modules/public/pages/NotFound";

// Admin
import AdminLayout from "../modules/admin/layouts/Layouts";
import AuthRoute from "../modules/auth/AuthRoute";
import Login from "../modules/auth/pages/Login";

import AdminDashboard from "../modules/admin/pages/AdminDashboard";

import Category from "../modules/admin/pages/Category";
import AddCategory from "../modules/admin/components/category/AddCategory";
import UpdateCategory from "../modules/admin/components/category/UpdateCategory";

import News from "../modules/admin/pages/News";
import AddNews from "../modules/admin/components/news/AddNews";
import UpdateNews from "../modules/admin/components/news/UpdateNews";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path=":slug" element={<NewsPage />} />
          <Route path="haber/:slug" element={<NewsDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Auth */}
        <Route path="/admin-login" element={<Login />} />

        {/* Admin */}
        <Route
          path="/dashboard"
          element={
            <AuthRoute>
              <AdminLayout />
            </AuthRoute>
          }
        >
          <Route index element={<AdminDashboard />} />

          <Route path="category" element={<Category />} />
          <Route path="category/add" element={<AddCategory />} />
          <Route path="category/update" element={<UpdateCategory />} />

          <Route path="news" element={<News />} />
          <Route path="news/add" element={<AddNews />} />
          <Route path="news/update" element={<UpdateNews />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
