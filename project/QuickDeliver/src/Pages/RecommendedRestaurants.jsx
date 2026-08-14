import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import RestaurantCards from "../Components/RestaurantCards";

const cloudUrl = import.meta.env.VITE_CLOUD_URL;

const RecommendedRestaurants = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useSelector((store) => store.location);

  const [data, setData] = useState(null);

  useEffect(() => {
    if (location?.data) {
      fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.data.latitude}&lng=${location.data.longitude}&collection=${id}&type=rcv2`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data.cards);
          setData(data);
        });
    }
  }, [location, id]);

  if (!data) {
    return (
      <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-green-50">
        <Navbar />

        <div className="flex h-[80vh] items-center justify-center">
          <Loader />
        </div>
      </div>
    );
  }

  const restaurants = data.data.cards.slice(2);

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-green-50">
      <Navbar />

<button
  onClick={() => navigate("/restaurants")}
  className="fixed top-24 right-6 z-50 flex items-center gap-3 rounded-full bg-linear-to-r from-orange-500 to-red-500 px-5 py-3 text-white shadow-xl animate-bounce transition-all duration-300 hover:animate-none hover:scale-110"
>
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-500">
    <i className="fa-solid fa-arrow-left"></i>
  </div>

  <span className="text-lg font-bold tracking-wide">
    Back
  </span>
</button>

      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* Header */}
        <div className="mb-10 rounded-3xl border border-orange-100 bg-white p-8 shadow-xl">

          <div className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            🍽 Curated Collection
          </div>

          <h1 className="mt-5 text-3xl font-extrabold text-gray-800 md:text-5xl">
            {data.data.cards[0].card.card.title}
          </h1>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-600">
            {data.data.cards[0].card.card.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">

            <div className="rounded-full bg-orange-500 px-5 py-2 text-white shadow">
              🍴 {restaurants.length} Restaurants
            </div>

            <div className="rounded-full bg-green-500 px-5 py-2 text-white shadow">
              🚀 Fast Delivery
            </div>

            <div className="rounded-full bg-red-500 px-5 py-2 text-white shadow">
              ⭐ Top Rated
            </div>

          </div>

        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {restaurants.map((item, index) => (
            <RestaurantCards
              key={item.card.card.info?.id || index}
              url={cloudUrl}
              info={item.card.card}
              size="lg"
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default RecommendedRestaurants;