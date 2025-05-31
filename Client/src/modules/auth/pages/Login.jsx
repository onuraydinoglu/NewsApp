import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginAdmin, isAdminAuthenticated } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Giriş yapmışsa login sayfasına erişme → yönlendir
  useEffect(() => {
    if (isAdminAuthenticated()) {
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = loginAdmin(email, password);
    if (success) {
      navigate("/dashboard");
    } else {
      alert("Hatalı kullanıcı adı veya şifre.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div>
        <Link to="/" className="text-6xl nav-icon">
          NewsApp
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
