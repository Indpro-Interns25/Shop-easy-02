import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Response from backend:", data);
      setMessage(data.message || "Login attempt complete");
      navigate("/customerhome")

    } catch (error) {
      console.error("Error connecting to backend:", error);
      setMessage("Error connecting to backend");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-pink-50 to-amber-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl w-full max-w-md p-8 border border-amber-100"
      >
        {/* Brand / Logo Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-serif tracking-widest text-gray-900">
            Maráh
          </h1>
          <div className="w-16 mx-auto mt-2 border-b-2 border-amber-300 rounded-full"></div>
        </div>

        <h2 className="text-2xl font-light text-center text-gray-800 mb-2 tracking-wide">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Sign in to continue your style journey ✨
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-200"
              placeholder="you@example.com"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-200"
              placeholder="••••••••"
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-2 bg-gradient-to-r from-pink-400 to-amber-300 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            Login
          </motion.button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center text-gray-700 font-medium"
          >
            {message}
          </motion.p>
        )}

        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-pink-500 hover:underline font-medium"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;