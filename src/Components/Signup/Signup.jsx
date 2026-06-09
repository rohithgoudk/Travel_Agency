import { Link, useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaLinkedinIn,
  FaArrowLeft,
} from "react-icons/fa";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="signup-page">
      <div className="signup-overlay">
        <form className="signup-box">

          {/* Back Home Button */}
          <button
            type="button"
            className="back-home-btn"
            onClick={() => navigate("/")}
          >
            <FaArrowLeft />
            Back to Home
          </button>

          <h2>Create Your Account</h2>

          <p className="signup-subtitle">
            Join thousands of travelers discovering amazing destinations worldwide.
          </p>

          {/* Social Login */}
          <div className="social-login">

            <button
              type="button"
              className="google-btn"
            >
              <FaGoogle />
              Continue with Google
            </button>

            <button
              type="button"
              className="linkedin-btn"
            >
              <FaLinkedinIn />
              Continue with LinkedIn
            </button>

          </div>

          <div className="divider">
            <span>OR</span>
          </div>

          {/* Form Inputs */}

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="text"
            placeholder="Username"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            required
          />

          {/* Newsletter */}

          <label className="checkbox-container">
            <input type="checkbox" />
            Subscribe to travel deals and exclusive offers
          </label>

          {/* Terms */}

          <label className="checkbox-container">
            <input
              type="checkbox"
              required
            />
            I agree to the Terms & Conditions and Privacy Policy
          </label>

          <button
            type="submit"
            className="signup-btn"
          >
            Create Account
          </button>

          <p className="login-link">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Signup;