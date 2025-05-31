// src/modules/admin/pages/Dashboard.jsx
import { getAdminUser } from "../../auth/services/authService";

const AdminDashboard = () => {
  const admin = getAdminUser();

  if (!admin) {
    return (
      <div className="p-6 text-red-500">Admin bilgisi bulunamadı. Lütfen tekrar giriş yapın.</div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Admin Paneli</h1>
      <p>
        Hoş geldin,{" "}
        <strong>
          {admin.name} {admin.surname}
        </strong>
      </p>
      <p>Buradan haberleri yönetebilirsiniz.</p>
    </div>
  );
};

export default AdminDashboard;
