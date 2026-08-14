import RestaurantCards from "./RestaurantCards";

const cloudUrl = import.meta.env.VITE_CLOUD_URL;

const TopRestaurantsInArea = ({ title, info }) => {
  return (
    <section className="w-[80%] `max-w-300` mx-auto my-12 p-6 rounded-3xl bg-linear-to-br from-white via-orange-50 to-green-50 shadow-lg border border-orange-100">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h2 className="text-2xl font-extrabold text-gray-800">
            {title}
          </h2>

          <div className="mt-2 h-1 w-24 rounded-full bg-linear-to-r from-orange-500 to-green-500"></div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button className="w-9 h-9 rounded-full bg-white shadow-md hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110">
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button className="w-11 h-11 rounded-full bg-white shadow-md hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Restaurant Slider */}
      <div className="flex gap-4 overflow-x-auto scrollbar-none pb-4">
        {info.map((item) => (
          <RestaurantCards
            key={item.info.id}
            url={cloudUrl}
            info={item}
            size="lg"
          />
        ))}
      </div>

    </section>
  );
};

export default TopRestaurantsInArea;