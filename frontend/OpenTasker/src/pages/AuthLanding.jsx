import { Link } from "react-router-dom";

export default function AuthLanding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-3">Welcome to OpenTasker</h1>
      <p className="text-xs w-3/4 md:w-1/4 mb-5">
        OpenTasker is your personal productivity sidekick — a clean, intuitive
        to-do list where you can organize tasks, stay focused, and get things
        done. Whether you're managing daily chores or planning big goals, it
        keeps your priorities right where they belong: front and center
      </p>

      <div className="flex flex-col md:flex-row items-center mt-3 gap-3">
        <Link to="/register">
          <button>Register</button>
        </Link>
        <p>or</p>

        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}
