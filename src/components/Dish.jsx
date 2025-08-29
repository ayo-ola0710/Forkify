import { FaBookmark } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useMeal } from "../utils/useMeal";

const Dish = () => {
  const { selectedId, handleBookmark } = useMeal();
  const [details, setDetails] = useState({});
  const [showFullText, setShowFullText] = useState(false);

  const {
    strMealThumb: img,
    strTags: tags,
    strMeal: name,
    strArea: area,
    strInstructions: instruction,
    strIngredient1: ingredents1,
    strIngredient2: ingredents2,
    strIngredient3: ingredents3,
    strIngredient4: ingredents4,
    strIngredient5: ingredents5,
    strIngredient6: ingredents6,
  } = details;

  function handleAdd() {
    const newFood = {
      id: selectedId,
      img,
      name,
      area,
    };

    handleBookmark(newFood);
  }

  useEffect(() => {
    async function getDetails() {
      const recipes = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedId}`
      );
      const data = await recipes.json();
      setDetails(data.meals[0]);
    }
    getDetails();
  }, [selectedId]);

  const toggleShowFullText = () => {
    setShowFullText((prev) => !prev);
  };

  const truncatedText = instruction ? instruction.slice(0, 100) : "";

  return (
    <div className="-ml-45">
      <div>
        <img
          src={img}
          alt="product"
          width={668}
          height={10}
          className="h-80 object-cover"
        />
        {tags === null ? (
          ""
        ) : (
          <span className="bg-orange-300 px-8 py-3  font-bold left-60 -top-8 relative z-30">
            {tags}
          </span>
        )}
      </div>
      <div className="bg-gray-50 relative -mt-10 mr-40 z-10 py-7 gap-5 flex justify-between items-center ">
        <div className="flex items-center gap-3 pl-10 text-sm ">
          <p>
            {showFullText ? instruction : truncatedText}
            {instruction && instruction.length > 100 && (
              <button
                onClick={toggleShowFullText}
                className="text-orange-500 ml-2 underline"
              >
                {showFullText ? "Read less" : "Read more"}
              </button>
            )}
          </p>
        </div>
        <button
          className="bg-orange-300 p-4 rounded-full mr-15 hover:bg-orange-400"
          onClick={handleAdd}
        >
          <FaBookmark className="text-white text-xl" />
        </button>
      </div>
      <div className="bg-gray-100 pb-20 rounded-br-4xl mr-40">
        <p className="uppercase text-xl text-orange-400 pt-5 pl-7 ">
          Ingredents
        </p>
        <ul className="list-disc pl-20 flex gap-15">
          <div className="pt-5 font-bold capitalize">
            <li>{ingredents1}</li>
            <li>{ingredents2}</li>
            <li>{ingredents3}</li>
          </div>
          <div className="pt-5 font-bold capitalize">
            <li>{ingredents4}</li>
            <li>{ingredents5}</li>
            <li>{ingredents6}</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dish;
