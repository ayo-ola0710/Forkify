import { useMeal } from "../utils/useMeal";
import { useEffect } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Dish from "./Dish";
import ErrorMessage from "./ui/ErrorMessage";

const ItemsContainer = () => {
  const { inputValue, setData, setError, setIsLoading, error, selectedId } =
    useMeal();

  useEffect(() => {
    async function getRecipt() {
      if (!inputValue) {
        setIsLoading(false);
        setError("");
        return;
      }
      try {
        setIsLoading(true);
        setData([]);
        setError("");
        const recipes = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`
        );

        if (!recipes.ok) throw new Error();

        const result = await recipes.json();
        setData(result.meals === null ? [] : result.meals);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setIsLoading(false);
      }
    }
    getRecipt();
  }, [inputValue]);

  return (
    <div className="pt-20  ">
      <Navbar />
      <div className="grid grid-cols-2 ">
        {error ? (
          <div className="bg-white w-85 ml-40 pt-30 pb-10 rounded-bl-4xl ">
            <ErrorMessage
              title="Failed to get recipe pls try again"
              className="text-md"
            />
          </div>
        ) : (
          <SideBar />
        )}

        {selectedId ? (
          <Dish />
        ) : (
          <div className="bg-slate-100 text-center -ml-44 mr-40 pt-20 rounded-br-4xl">
            <ErrorMessage
              title=" Select an recipe to view option"
              className="text-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsContainer;
