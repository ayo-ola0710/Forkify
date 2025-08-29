import { createContext, useState, useMemo } from "react";

const MealContext = createContext();

function MealProvider({ children }) {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSelect(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleBookmark(data) {
    setBookmarked((bookmarked) => {
      if (bookmarked.find((item) => item.id === data.id)) {
        return bookmarked;
      }
      return [...bookmarked, data];
    });
  }

  const onSelect = (idMeal) => {
    setSelectedId(idMeal);
  };

  const value = useMemo(() => {
    return {
      inputValue,
      setInputValue,
      data,
      setData,
      bookmarked,
      selectedId,
      setBookmarked,
      handleSelect,
      handleBookmark,
      error,
      setError,
      isLoading,
      setIsLoading,
      onSelect,
    };
  }, [inputValue, data, bookmarked, selectedId, error, isLoading]);

  return <MealContext.Provider value={value}>{children}</MealContext.Provider>;
}

export { MealProvider };
export { MealContext };
