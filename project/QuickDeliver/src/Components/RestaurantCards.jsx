import { useNavigate } from "react-router-dom";

const RestaurantCards = ({ info, url, size, }) => {
  const nav = useNavigate();

  const {
    avgRatingString,
    cloudinaryImageId,
    cuisines,
    areaName,
    name,
  } = info.info;

  const time = info.info.sla.slaString;

  return (
    <article
      onClick={() => {
        nav("/menu/123456");
      }}
      className={`shrink-0 cursor-pointer overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl ${
        size === "lg" ? "w-75" : "w-55"
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          className={`w-full object-cover transition-transform duration-500 hover:scale-110 ${
            size === "lg" ? "h-50" : "h-40"
          }`}
          src={url + cloudinaryImageId}
          alt={name}
        />

        {/* Delivery Time */}
        <div className="absolute bottom-3 right-3 rounded-full bg-linear-to-r from-orange-500 to-green-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
          {time}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Restaurant Name */}
        <h2 className="truncate text-lg font-bold text-gray-800">
          {name}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
            <img
              className="h-4 w-4"
              src="/greenstar.svg"
              alt="Rating"
            />
            <span className="text-sm font-semibold text-green-700">
              {avgRatingString}
            </span>
          </div>

          <span className="text-sm text-gray-500">
            • {time}
          </span>
        </div>

        {/* Cuisine */}
        <p className="mt-2 truncate text-sm text-gray-500">
          {cuisines.join(", ")}
        </p>

        {/* Area */}
        <p className="mt-1 flex items-center gap-1 text-sm font-medium text-gray-600">
          📍 {areaName}
        </p>

      </div>
    </article>
  );
};

export default RestaurantCards;