import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProducts,
  addFavourite,
} from "../utils/productSlice";

function Products() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-blue-600 animate-pulse">
          Loading Products...
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🛍️ Our Products
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="bg-gray-100">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {item.title}
              </h2>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-bold text-green-600">
                  ${item.price}
                </span>

                <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-semibold">
                  ⭐ {item.rating}
                </span>
              </div>

              <button
                onClick={() => dispatch(addFavourite(item))}
                className="w-full mt-5 bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 transition duration-300"
              >
                ❤️ Add to Favourite
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;