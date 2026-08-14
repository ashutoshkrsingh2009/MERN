import { useNavigate } from 'react-router-dom'

const Landing = () => {

    const nav = useNavigate()

  return (
<div className="min-h-screen relative bg-linear-to-br from-white via-orange-50 to-green-50">
        
<nav className="sticky top-0 z-50 flex items-center justify-between bg-linear-to-r from-white via-orange-50 to-green-50 px-10 h-20 shadow-md">

  {/* Logo */}
  <img
    src="/quickDeliver1.png"
    alt="QuickDeliver Logo"
    className="h-16 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
  />

  {/* Right Side */}
  <div className="flex items-center gap-6 text-green-700 font-medium">

    <button className="hover:text-[#FF5200] transition">
      QuickDeliver Corporate
    </button>

    <button className="hover:text-[#FF5200] transition">
      Partner with us
    </button>

    <button className="rounded-lg border-2 border-black px-5 py-2 hover:border-[#FF5200] hover:text-[#FF5200] transition">
      📱 Get the App
    </button>

    <button className="rounded-lg bg-black px-6 py-2 text-white font-semibold hover:bg-gray-800 transition">
      Sign in
    </button>

  </div>

</nav>
<div className="flex flex-col items-center gap-10 mt-10">
  <h1 className="text-center text-5xl font-bold leading-tight text-gray-900">
    Order food & groceries. Discover <br />
    best restaurants.{" "}
    <span className="text-[#ff7a00]">Quick</span>
    <span className="text-[#16a34a]">Deliver</span> it!
  </h1>
<div className="relative w-[42vw]">
  <input
    type="text"
    placeholder="Search for restaurants, food, groceries..."
    className="
      w-full
      h-14
      rounded-2xl
      pl-5
      pr-14
      text-lg
      bg-linear-to-r
      from-orange-100
      via-white
      to-green-100
      border-2
      border-white
      shadow-xl
      text-gray-800
      placeholder:text-gray-500
      outline-none
      focus:border-green-500
      focus:ring-4
      focus:ring-green-200
      transition-all
      duration-300
    "
  />

  <button
    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600 transition-colors duration-200"
  >
    <span className="text-xl">🔍</span>
  </button>
</div>


<div className="flex gap-6 justify-center items-center">
  <img
    onClick={() => nav("/restaurants")}
    className="h-75 cursor-pointer rounded-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
    src="swiggy1.avif"
    alt=""
  />

  <img
    className="h-75 cursor-pointer rounded-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
    src="swiggy2.avif"
    alt=""
  />

  <img
    className="h-75 cursor-pointer rounded-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
    src="swiggy3.avif"
    alt=""
  />
</div>

<footer className="w-full bg-linear-to-br from-white via-orange-50 to-green-50 border-t border-gray-200 mt-10">
  <div className="flex flex-col items-center justify-center py-6">

    {/* Logo */}
    <img
      src="/bg.png"
      alt="QuickDeliver"
      className="h-10 w-10 "
    />

    {/* Brand Name */}
    <h2 className="text-2xl font-bold">
      <span className="text-[#ff7a00]">Quick</span>
      <span className="text-[#16a34a]">Deliver</span>
    </h2>
    {/* Copyright */}
    <p className="text-xs text-gray-500 text-center">
      © 2026 QuickDeliver • Made with ❤️ by <span className="font-semibold">AshAn</span>
    </p>

  </div>
</footer>

        </div>


        {/* <img className='fixed left-0 top-40 h-100' src="Veggies_new.png" alt="" />
        <img className='fixed right-0 top-40 h-100' src="Sushi_replace.png" alt="" /> */}

        <img className='absolute left-0 top-40 h-100' src="Veggies_new.png" alt="" />
        <img className='absolute right-0 top-40 h-100' src="Sushi_replace.png" alt="" />

    </div>
    
  )
}

export default Landing