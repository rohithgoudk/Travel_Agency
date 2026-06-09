import "./Login.css";

function Login() {
  return (
    <div className="login-page">

      <form className="login-box">

        <h2>Welcome Back</h2>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;