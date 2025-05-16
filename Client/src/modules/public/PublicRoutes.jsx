import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../public/pages/Home";
import Layouts from "./layouts/Layout";

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
