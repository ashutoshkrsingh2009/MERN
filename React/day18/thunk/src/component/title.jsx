import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../utils/productSlice";

function Titles() {
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
      <h1>All Titles</h1>

      {products.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
}

export default Titles;