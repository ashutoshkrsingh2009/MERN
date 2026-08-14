const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-6">

      <img
        src="/bg.png"
        alt="QuickDeliver"
        className="h-16 animate-pulse"
      />

      <div className="relative">
        <div className="w-16 h-16 rounded-full border-[6px] border-orange-100"></div>

        <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-[6px] border-transparent border-t-orange-500 border-r-green-500 animate-spin"></div>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
          Finding delicious food near you...
        </h2>

        <p className="text-gray-500 mt-2">
          Please wait while we fetch the best restaurants 🍕🍔🥗
        </p>
      </div>

      <div className="flex gap-2">
        <span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></span>
        <span
          className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></span>
        <span
          className="w-3 h-3 bg-green-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </div>

    </div>
  );
};

export default Loader;