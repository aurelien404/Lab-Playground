import { useState } from "react";
import axios from "../api/axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.get("/sanctum/csrf-cookie");

      const csrfToken = Cookies.get("XSRF-TOKEN");

      const response = await axios.post(
        "/login",
        { email, password },
        {
          headers: {
            "X-XSRF-TOKEN": csrfToken,
          },
        }
      );

      console.log("Login success:", response.data);
      navigate("/dashboard");
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-5/6 md:w-1/4 items-center justify-center gap-4"
      >
        <h1 className="mb-5">Login</h1>

        {error && <p className="text-red-350 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="Email"
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

        <button type="submit" className="w-1/2 mt-8">
          Log In
        </button>
      </form>
    </div>
  );
}
