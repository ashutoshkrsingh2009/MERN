import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-8xl font-bold text-red-600">404</h1>

      <p className="mt-4 text-2xl font-semibold text-gray-800">
        Oops! Page Not Found
      </p>

      <p className="mt-2 text-gray-500">
        The page you are looking for doesn't exist.
      </p>

      <button
        onClick={() => navigate("/a")}
        className="mt-8 px-6 py-3 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition duration-300"
      >
        Go to Home Page
      </button>
    </div>
  );
}

export default Error;