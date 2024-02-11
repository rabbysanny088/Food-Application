import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import FoodCard from "../components/FoodCard";
import FoodData from "../data/FoodData";

const FoodItems = () => {
  const handleToast = (name) => toast.success(`${name} Added to cart`);
  const category = useSelector((state) => state.category.category);

  const search = useSelector((state) => state.search.search);
  const filteredFood = FoodData.filter((food) => {
    if (category === "All") {
      return food.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return (
        category === food.category &&
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  });
  return (
    <>
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
          {filteredFood.length > 0 ? (
            filteredFood.map((food) => (
              <FoodCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                desc={food.desc}
                rating={food.rating}
                img={food.img}
                handleToast={handleToast}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No results found.</p>
          )}
        </div>
      </>
    </>
  );
};

export default FoodItems;
