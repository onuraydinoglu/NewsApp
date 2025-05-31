import users from "../../../shared/data/users";

export const loginAdmin = (email, password) => {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("isAdmin", "true");
    localStorage.setItem("adminUser", JSON.stringify(user));
    return true;
  }
  return false;
};

export const logoutAdmin = () => {
  localStorage.removeItem("isAdmin");
  localStorage.removeItem("adminUser");
};

export const isAdminAuthenticated = () => {
  return localStorage.getItem("isAdmin") === "true";
};

export const getAdminUser = () => {
  const data = localStorage.getItem("adminUser");
  return data ? JSON.parse(data) : null;
};
