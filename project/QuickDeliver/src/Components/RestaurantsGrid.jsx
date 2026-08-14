import RestaurantCards from "./RestaurantCards";

const cloudUrl = import.meta.env.VITE_CLOUD_URL;

const RestaurantsGrid = ({ title, info }) => {
  return (
    <section className="w-[80%] max-w-[1200px] mx-auto my-12 p-6 rounded-3xl bg-linear-to-br from-white via-orange-50 to-green-50 shadow-lg border border-orange-100">

      {/* Heading */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-extrabold text-gray-800">
          {title}
        </h2>

        <div className="h-1 w-24 rounded-full bg-linear-to-r from-orange-500 to-green-500"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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

export default RestaurantsGrid;