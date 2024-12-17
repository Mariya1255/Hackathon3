import React from 'react';

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {/* Card Container */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <p className="text-gray-500 text-center mb-6">
          Please login using account detail below.
        </p>

        {/* Form Inputs */}
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <a
              href="#"
              className="text-blue-500 text-sm hover:underline"
            >
              Forgot your password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don&apos;t have an Account?{' '}
          <a
            href="#"
            className="text-blue-500 hover:underline"
          >
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}
