import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-red-600">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <p className="text-gray-400 mt-2">
          The page you are looking for doesn't exist or an error occurred.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-red-600 text-black font-bold rounded hover:bg-red-700 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
