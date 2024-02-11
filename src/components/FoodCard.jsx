import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/slices/CartSlice";
const FoodCard = ({ id, name, desc, img, rating, price , handleToast}) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addToCart({ id, name, price, rating, qty: 1, img }));
    handleToast(name);
  };

  

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        src={img}
        alt="img"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className=" text-green-500">৳{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" />
          {rating}
        </span>
        <button
          onClick={handleCart}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
