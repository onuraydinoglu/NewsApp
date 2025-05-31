import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "../../../../shared/components/Button";
import categories from "../../../../shared/data/categories";
import { useNavigate } from "react-router-dom";

const CategoryListCard = () => {
  const navigate = useNavigate();
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
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{category.name}</td>
              <td>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    className="btn-sm"
                    onClick={() => navigate("/dashboard/category/update")}
                  >
                    Edit
                    <FaEdit />
                  </Button>
                  <Button className="btn-sm btn-warning">
                    Delete
                    <FaTrash />
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
