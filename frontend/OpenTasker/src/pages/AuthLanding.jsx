import { Link } from "react-router-dom";

export default function AuthLanding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1>Welcome to OpenTasker</h1>
      <p>Please log in or create a new account</p>

      <div className="flex flex-col items-center">
        <Link to="/register">
          <button>Register</button>
        </Link>
        <div className="w-3/4 h-1 border-b-2 border-dotted my-4"></div>
        <Link to="/login">
          <p className="hoover">Login</p>
        </Link>
      </div>
    </div>
  );
}
