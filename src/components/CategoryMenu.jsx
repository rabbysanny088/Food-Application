import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodData from "../data/FoodData";
import { setCategory } from "../redux/features/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniquCategories = () => {
    const uniqueCatgoryies = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCatgoryies);
    console.log(uniqueCatgoryies);
  };

  useEffect(() => {
    listUniquCategories();
  }, []);

  const selectedCategory = useSelector((state) => state.category.category);

  const dispatch = useDispatch();

  return (
    <div className="ml-6">
      <h3 className="font-semibold text-xl ">Find the best foods</h3>
      <div
        className={`my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden md:overflow-x-hidden `}
      >
        <button
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
          onClick={() => dispatch(setCategory("All"))}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white  ${
                selectedCategory === category && "bg-green-500 text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
