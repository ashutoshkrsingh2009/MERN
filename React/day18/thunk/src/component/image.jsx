import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../utils/productSlice";

function Images() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>All Images</h1>

      {products.map((item) => (
        <img
          key={item.id}
          src={item.thumbnail}
          alt={item.title}
        />
      ))}
    </div>
  );
}

export default Images;