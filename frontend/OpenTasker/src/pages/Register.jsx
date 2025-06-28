import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.get("/sanctum/csrf-cookie");

      const csrfToken = Cookies.get("XSRF-TOKEN");

      const response = await axios.post("/register", form, {
        headers: {
          "X-XSRF-TOKEN": csrfToken,
        },
      });

      console.log("Registration success:", response.data);
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="flex flex-col w-5/6 md:w-1/4 items-center justify-center gap-4"
      >
        <h1 className="mb-5">Register</h1>

        {error && <p className="text-red-350 text-sm">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          value={form.password_confirmation}
          onChange={handleChange}
          required
        />

        <button type="submit" className="w-1/2 mt-8">
          Register
        </button>
      </form>
    </div>
  );
}
