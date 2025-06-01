import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "../../../../shared/components/Button";
import { getCategories, deleteCategory } from "../../../../shared/services/categoryService";

const CategoryListCard = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await getCategories();
    setCategories(res.data);
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
    fetchCategories();
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category._id}>
              <th>{index + 1}</th>
              <td>{category.name}</td>
              <td>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    className="btn-sm"
                    onClick={() =>
                      navigate(`/dashboard/category/update/${category._id}/${category.slug}`)
                    }
                  >
                    Edit <FaEdit />
                  </Button>
                  <Button className="btn-sm btn-warning" onClick={() => handleDelete(category._id)}>
                    Delete <FaTrash />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryListCard;
