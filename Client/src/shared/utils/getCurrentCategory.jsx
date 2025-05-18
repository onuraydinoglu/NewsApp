import categories from "../data/categories";

const getCurrentCategory = (path) => {
  const cleanedPath = path === "/" ? "/" : path.toLowerCase();

  return categories.find((cat) => cat.path === cleanedPath);
};

export default getCurrentCategory;
