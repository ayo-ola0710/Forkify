import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ErrorMessage from "./ui/ErrorMessage";
import Products from "./ui/Products";
import Loading from "./ui/Loading";

import { useState } from "react";

const SideBar = ({ data, onSelect, isLoading, error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const meal = data;

  if (!Array.isArray(meal) || meal.length === 0) {
    return (
      <div className="bg-white w-85 ml-40 pt-30 pb-70 rounded-bl-4xl ">
        <ErrorMessage
          title="Search for recipe by first letter "
          className="text-md"
        />
      </div>
    );
  }

  const totalPages = Math.ceil(meal.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = meal.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="bg-white w-85 ml-40 pt-7 pb-10 rounded-bl-4xl ">
      {isLoading && <Loading />}

      {!isLoading && !error && (
        <div>
          {currentItems.map((meal) => (
            <Products key={meal.idMeal} meal={meal} onSelect={onSelect} />
          ))}
          <div className="flex items-center justify-between px-8 mt-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`flex items-center gap-1 ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-orange-300 hover:text-orange-400"
              }`}
            >
              <FaArrowLeft className="text-sm" />
              <p>Previous</p>
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-1 ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-orange-300 hover:text-orange-400"
              }`}
            >
              <p>Next</p>
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
