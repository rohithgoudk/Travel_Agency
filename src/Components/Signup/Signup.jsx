import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaLinkedinIn, FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Signup.css";

const ErrorIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="5.5" stroke="#EF4444" strokeWidth="1" />
    <path d="M6 3.5v3M6 8.5v.01" stroke="#EF4444" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // ── Validators ──────────────────────────────────────────
  const isAlphaSpace = (val) => /^[a-zA-Z\s]*$/.test(val);
  const isAlphaOnly  = (val) => /^[a-zA-Z]*$/.test(val);
  const isGmail      = (val) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(val.trim());

  const validate = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value) return "Full name is required";
        if (!isAlphaSpace(value)) return "Only letters and spaces allowed";
        if (value.trim().length < 2) return "Name is too short";
        return "";
      case "username":
        if (!value) return "Username is required";
        if (!isAlphaOnly(value)) return "Only letters allowed — no numbers or symbols";
        if (value.length < 3) return "At least 3 characters required";
        return "";
      case "email":
        if (!value) return "Email is required";
        if (!isGmail(value)) return "Only Gmail accounts allowed (@gmail.com)";
        return "";
      case "phone":
        if (!value) return "Phone number is required";
        if (!/^\+?[0-9\s\-()]{7,15}$/.test(value)) return "Enter a valid phone number";
        return "";
      case "password":
        if (!value) return "Password is required";
        if (value.length < 8) return "At least 8 characters required";
        return "";
      case "confirmPassword":
        if (!value) return "Please confirm your password";
        if (value !== form.password) return "Passwords do not match";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newVal = type === "checkbox" ? checked : value;

    // Block non-alpha input for name/username at keystroke level
    if (name === "fullName" && value && !isAlphaSpace(value)) return;
    if (name === "username" && value && !isAlphaOnly(value)) return;

    setForm((prev) => ({ ...prev, [name]: newVal }));

    if (type !== "checkbox") {
      setErrors((prev) => ({
        ...prev,
        [name]: validate(name, newVal),
        // Re-validate confirm when password changes
        ...(name === "password"
          ? { confirmPassword: form.confirmPassword ? (form.confirmPassword !== newVal ? "Passwords do not match" : "") : prev.confirmPassword }
          : {}),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    ["fullName", "username", "email", "phone", "password", "confirmPassword"].forEach((key) => {
      const msg = validate(key, form[key]);
      if (msg) newErrors[key] = msg;
    });

    if (!form.terms) {
      newErrors.terms = "You must accept the Terms & Conditions";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Add your registration logic here
    navigate("/dashboard");
  };

  return (
    <div className="signup-page">
      <form className="signup-box" onSubmit={handleSubmit} noValidate>

        {/* Back button */}
        <button type="button" className="back-home-btn" onClick={() => navigate("/")}>
          <FaArrowLeft />
          Back to Home
        </button>

        <h2>Create Your Account</h2>
        <p className="signup-subtitle">
          Join thousands of travelers discovering amazing destinations worldwide.
        </p>

        {/* Social buttons */}
        <div className="social-login">
          <button type="button" className="google-btn">
            <FaGoogle /> Continue with Google
          </button>
          <button type="button" className="linkedin-btn">
            <FaLinkedinIn /> Continue with LinkedIn
          </button>
        </div>

        <div className="divider"><span>OR</span></div>

        {/* Full Name + Username row */}
        <div className="input-row">
          <div className="input-group">
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className={errors.fullName ? "input-error" : form.fullName ? "input-success" : ""}
              autoComplete="name"
            />
            <label htmlFor="fullName">Full Name</label>
            {errors.fullName && (
              <span className="field-msg error"><ErrorIcon />{errors.fullName}</span>
            )}
          </div>

          <div className="input-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className={errors.username ? "input-error" : form.username ? "input-success" : ""}
              autoComplete="username"
            />
            <label htmlFor="username">Username</label>
            {errors.username && (
              <span className="field-msg error"><ErrorIcon />{errors.username}</span>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="input-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : form.email && !errors.email ? "input-success" : ""}
            autoComplete="email"
          />
          <label htmlFor="email">Email Address</label>
          {errors.email
            ? <span className="field-msg error"><ErrorIcon />{errors.email}</span>
            : <span className="field-msg hint">Gmail accounts only</span>
          }
        </div>

        {/* Phone */}
        <div className="input-group">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className={errors.phone ? "input-error" : form.phone && !errors.phone ? "input-success" : ""}
            autoComplete="tel"
          />
          <label htmlFor="phone">Phone Number</label>
          {errors.phone && (
            <span className="field-msg error"><ErrorIcon />{errors.phone}</span>
          )}
        </div>

        {/* Password */}
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className={errors.password ? "input-error" : form.password && !errors.password ? "input-success" : ""}
            autoComplete="new-password"
          />
          <label htmlFor="password">Password</label>
          <button
            type="button"
            className="pw-toggle"
            onClick={() => setShowPassword((p) => !p)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
          {errors.password && (
            <span className="field-msg error"><ErrorIcon />{errors.password}</span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="input-group">
          <input
            type={showConfirm ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? "input-error" : form.confirmPassword && !errors.confirmPassword ? "input-success" : ""}
            autoComplete="new-password"
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <button
            type="button"
            className="pw-toggle"
            onClick={() => setShowConfirm((p) => !p)}
            aria-label={showConfirm ? "Hide password" : "Show password"}
          >
            {showConfirm ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
          {errors.confirmPassword && (
            <span className="field-msg error"><ErrorIcon />{errors.confirmPassword}</span>
          )}
        </div>

        {/* Newsletter */}
        <label className="checkbox-container">
          <input
            type="checkbox"
            name="newsletter"
            checked={form.newsletter}
            onChange={handleChange}
          />
          Subscribe to travel deals and exclusive offers
        </label>

        {/* Terms */}
        <label className="checkbox-container">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            required
          />
          I agree to the <a href="/terms">Terms &amp; Conditions</a> and <a href="/privacy">Privacy Policy</a>
        </label>
        {errors.terms && (
          <span className="field-msg error" style={{ marginTop: "-8px", marginBottom: "8px" }}>
            <ErrorIcon />{errors.terms}
          </span>
        )}

        {/* Submit */}
        <button type="submit" className="signup-btn">
          Create Account
        </button>

        <p className="login-link">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>

      </form>
    </div>
  );
}

export default Signup;