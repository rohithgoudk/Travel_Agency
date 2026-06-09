import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUser, FaUserShield } from "react-icons/fa";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your authentication logic here

    if (role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-page">
      <div className="login-overlay">
        <form className="login-box" onSubmit={handleLogin}>
          <button
            type="button"
            className="back-home-btn"
            onClick={() => navigate("/")}
          >
            <FaArrowLeft />
            Back to Home
          </button>

          <h2>Welcome Back</h2>

          <p className="login-subtitle">
            Sign in and continue your travel journey
          </p>

          <div className="role-selector">
            <label className="role-option">
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === "user"}
                onChange={(e) => setRole(e.target.value)}
              />
              <FaUser />
              User
            </label>

            <label className="role-option">
              <input
                type="radio"
                name="role"
                value="admin"
                checked={role === "admin"}
                onChange={(e) => setRole(e.target.value)}
              />
              <FaUserShield />
              Admin
            </label>
          </div>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

          <p className="signup-link">
            New to TravelGo?
            <Link to="/signup">
              {" "}Create New Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;