import { Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/Cart";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Navbar from "../components/Navbar";
import { setLoading } from "../redux/features/slices/CartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.cart.isLoading);

  useEffect(() => {
    dispatch(setLoading(true));

    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Spin 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: '10px'
          }}
        />
      ) : (
        <>
          <Navbar />
          <CategoryMenu />
          <FoodItems />
          <Cart />
        </>
      )}
    </>
  );
};

export default Home;
