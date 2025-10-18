import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 sm:px-6 text-center">
      <div className="max-w-md sm:max-w-lg">
        <h1 className="text-5xl sm:text-6xl font-bold mb-3 sm:mb-4">404</h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-amber-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-500 transition text-sm sm:text-base"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
