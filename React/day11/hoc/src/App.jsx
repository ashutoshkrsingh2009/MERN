import ProductCard from "./component/ProductCard"
function App() {
  const products = [
  {
    id: 1,
    name: "Apple iPhone 13",
    image: "https://cdn.dummyjson.com/product-images/smartphones/apple-iphone-13/1.webp",
    price: 59999,
    onSale: true,
  },
  {
    id: 2,
    name: "Apple iPhone 14",
    image: "https://cdn.dummyjson.com/product-images/smartphones/apple-iphone-14/1.webp",
    price: 69999,
    onSale: false,
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    image: "https://cdn.dummyjson.com/product-images/smartphones/iphone-15-pro/1.webp",
    price: 129999,
    onSale: true,
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    image: "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s23/1.webp",
    price: 74999,
    onSale: false,
  },
  {
    id: 5,
    name: "Samsung Galaxy Z Fold5",
    image: "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-z-fold5/1.webp",
    price: 154999,
    onSale: true,
  },
  {
    id: 6,
    name: "Oppo Find X6 Pro",
    image: "https://cdn.dummyjson.com/product-images/smartphones/oppo-find-x6-pro/1.webp",
    price: 89999,
    onSale: false,
  },
  {
    id: 7,
    name: "Huawei P60 Pro",
    image: "https://cdn.dummyjson.com/product-images/smartphones/huawei-p60-pro/1.webp",
    price: 79999,
    onSale: true,
  },
  {
    id: 8,
    name: "Xiaomi Redmi Note 12 Pro",
    image: "https://cdn.dummyjson.com/product-images/smartphones/xiaomi-redmi-note-12-pro/1.webp",
    price: 24999,
    onSale: true,
  },
  {
    id: 9,
    name: "Realme C55",
    image: "https://cdn.dummyjson.com/product-images/smartphones/realme-c55/1.webp",
    price: 15999,
    onSale: false,
  },
  {
    id: 10,
    name: "Vivo X90 Pro",
    image: "https://cdn.dummyjson.com/product-images/smartphones/vivo-x90-pro/1.webp",
    price: 84999,
    onSale: true,
  },
];
  return (
    <div>
      {products.map((item)=>{
        return <ProductCard image={item.image} name={item.name} price={item.price}/>
      })}
    </div>
  )
}

export default App