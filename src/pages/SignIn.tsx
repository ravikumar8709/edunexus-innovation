import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useTheme } from "../contexts/ThemeContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isDarkMode } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in attempt with:", { email, password });
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <img className="h-12 w-12 rounded-full" src={logo} alt="EduNexus Logo" />
        </div>
        <h2
          className={`mt-6 text-center text-3xl font-extrabold ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Sign in to your account
        </h2>
        <p
          className={`mt-2 text-center text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Or{" "}
          <Link
            to="/contact"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            contact us for a demo
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div
          className={`py-8 px-4 shadow sm:rounded-lg sm:px-10 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "border-gray-300 text-gray-900"
                  }`}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "border-gray-300 text-gray-900"
                  }`}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                    isDarkMode ? "bg-gray-700 border-gray-600" : ""
                  }`}
                />
                <label
                  htmlFor="remember-me"
                  className={`ml-2 block text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div
                  className={`w-full border-t ${
                    isDarkMode ? "border-gray-700" : "border-gray-300"
                  }`}
                />
              </div>
              <div className="relative flex justify-center text-sm">
                <span
                  className={`px-2 ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-400"
                      : "bg-white text-gray-500"
                  }`}
                >
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className={`w-full inline-flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium hover:bg-gray-50 ${
                    isDarkMode
                      ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600"
                      : "bg-white text-gray-500 border-gray-300"
                  }`}
                >
                  <span className="sr-only">Sign in with Google</span>
                  Google
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className={`w-full inline-flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium hover:bg-gray-50 ${
                    isDarkMode
                      ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600"
                      : "bg-white text-gray-500 border-gray-300"
                  }`}
                >
                  <span className="sr-only">Sign in with Microsoft</span>
                  Microsoft
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
