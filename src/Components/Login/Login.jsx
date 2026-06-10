import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUser, FaUserShield, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");

  const isGmail = (val) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(val.trim());

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    if (val && !isGmail(val)) {
      setEmailError("Only Gmail accounts are allowed (@gmail.com)");
    } else {
      setEmailError("");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isGmail(email)) {
      setEmailError("Only Gmail accounts are allowed (@gmail.com)");
      return;
    }

    // Add your authentication logic here

    if (role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleLogin} noValidate>

        {/* Back button */}
        <button
          type="button"
          className="back-home-btn"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft />
          Back to Home
        </button>

        {/* Heading */}
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Sign in and continue your travel journey</p>

        {/* Role selector */}
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

        {/* Email */}
        <div className="input-group">
          <input
            type="email"
            id="login-email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            className={emailError ? "input-error" : ""}
            required
            autoComplete="email"
          />
          <label htmlFor="login-email">Email Address</label>
          {emailError && (
            <span className="input-error-msg">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5.5" stroke="#EF4444" strokeWidth="1"/>
                <path d="M6 3.5v3M6 8.5v.01" stroke="#EF4444" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              {emailError}
            </span>
          )}
        </div>

        {/* Password */}
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            id="login-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <label htmlFor="login-password">Password</label>
          <button
            type="button"
            className="pw-toggle"
            onClick={() => setShowPassword((p) => !p)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        </div>

        {/* Submit */}
        <button type="submit" className="login-btn">
          Sign In
        </button>

        {/* Sign up */}
        <p className="signup-link">
          New to TravelGo?{" "}
          <Link to="/signup">Create New Account</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;