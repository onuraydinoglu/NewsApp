import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminDashboard from "./pages/AdminDashboard.jsx";

import Layout from "./layouts/Layouts.jsx";

import Category from "./pages/Category.jsx";
import AddCategory from "./components/category/AddCategory.jsx";
import UpdateCategory from "./components/category/UpdateCategory.jsx";

import News from "./pages/News.jsx";
import AddNews from "./components/news/AddNews.jsx";
import UpdateNews from "./components/news/UpdateNews.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
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
}

export default App;
