import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./utils/productSlice";
import Images from "./component/image";
import Titles from "./component/title";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Images />
      <Titles />
    </div>
  );
}

export default App;