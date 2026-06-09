import "./Signup.css";

function Signup() {
  return (
    <div className="signup-page">

      <form className="signup-box">

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>
          Signup
        </button>

      </form>

    </div>
  );
}

export default Signup;