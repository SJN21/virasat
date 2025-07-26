import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AuthPage({ setAuth }) {
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isRegistering ? "register" : "login";
    const url = `http://localhost:8000/${endpoint}`;

    const payload = isRegistering
      ? formData
      : { email: formData.email, password: formData.password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.detail || "Something went wrong");
        return;
      }

      if (!isRegistering) {
        localStorage.setItem("token", data.access_token);
        debugger
        localStorage.setItem("name", data.name); 
        setAuth(true);
        navigate("/");
      } else {
        toast.success("Registered successfully! Please login.");
        setIsRegistering(false);
      }
    } catch (err) {
      toast.error("Request failed.");
    }
  };

  return (
    <div className="flex h-screen font-[Inter]">
      {/* Left Panel - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full px-6 sm:px-10"
        >
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="Logo" className="h-12" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {isRegistering ? "Create account" : "Welcome back"}
          </h2>

          <button className="w-full border border-gray-300 rounded-lg py-2 mb-4 flex items-center justify-center gap-2 hover:shadow">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Sign {isRegistering ? "up" : "in"} with Google
          </button>

          <div className="text-center text-gray-400 text-sm mb-4">OR</div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegistering && (
              <input
                type="text"
                name="name"
                placeholder="First name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {isRegistering && (<input
              type="text"
              name="number"
              placeholder="Phone number"
              value={formData.number}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />)}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="w-full bg-black text-white rounded-lg py-2 hover:opacity-90 transition"
            >
              {isRegistering ? "Create account" : "Login"}
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-6">
            {isRegistering
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-black underline font-medium"
            >
              {isRegistering ? "Log in" : "Register"}
            </button>
          </p>
        </motion.div>
      </div>

      {/* Right Panel - Background / Image */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-tr from-gray-100 to-white relative">
        <img
          src="/banner.jpg"
          alt="Creative"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-sm" />
        <div className="absolute bottom-10 left-10 text-white max-w-md">
          <h3 className="text-3xl font-bold mb-2">
            Start turning your ideas into reality.
          </h3>
          <p className="text-sm opacity-90">
            Create a free account and get full access to all features for
            30-days.
          </p>
        </div>
      </div>
    </div>
  );
}
