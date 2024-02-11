import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../redux/features/slices/CartSlice";

const ItemCard = ({ id, name, qty, price, img, handleToast }) => {
  const dispatch = useDispatch();

  const handleDeleteCart = () => {
    dispatch(removeFromCart({ id }));
    handleToast(name);
  };

  const handleIncrement = () => {
    if (qty >= 1) {
      dispatch(incrementQty({ id }));
    } else {
      qty = 0;
    }
  };
  const handleDecrement = () => {
    if (qty > 1) {
      dispatch(decrementQty({ id }));
    } else {
      qty = 0;
    }
  };

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={handleDeleteCart}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} alt="img empty" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">৳{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={handleDecrement}
              className="border-2 border-gray-600 text-gray-600 hover:text-withe hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={handleIncrement}
              className="border-2 border-gray-600 text-gray-600 hover:text-withe hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
