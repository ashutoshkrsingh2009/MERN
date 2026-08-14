import { useNavigate } from "react-router-dom";

const cloudUrl = import.meta.env.VITE_CLOUD_URL;

const Recommendations = ({ title, info }) => {
  const nav = useNavigate();

  return (
    <section className="w-[80%] max-w-[1200px] mx-auto my-10 rounded-3xl bg-gradient-to-br from-white via-orange-50 to-green-50 p-5 shadow-lg border border-orange-100">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-gray-800">
          {title}
        </h2>

        <div className="flex gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:bg-orange-500 hover:text-white">
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:bg-green-500 hover:text-white">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Images */}
      <div className="flex gap-5 overflow-x-auto scrollbar-none pb-3">
        {info.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              nav(`/restaurants/${item.action.link.slice(35, 40)}`)
            }
            className="cursor-pointer flex-shrink-0 overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
          >
            <img
              src={cloudUrl + item.imageId}
              alt=""
              className="h-52 w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;