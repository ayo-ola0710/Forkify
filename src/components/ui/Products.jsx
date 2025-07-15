const Products = ({ meal, onSelect }) => {
  return (
    <div
      className="flex items-center gap-4 pl-8 py-4 mb-4  hover:bg-orange-100"
      onClick={() => onSelect(meal.idMeal)}
    >
      <div>
        <img
          src={meal.strMealThumb}
          alt="logo"
          className="rounded-full "
          height={50}
          width={50}
        />
      </div>
      <div>
        <p className="text-orange-300 uppercase text-sm">{meal.strMeal}</p>
        <p className="text-sm">{meal.strArea}</p>
      </div>
    </div>
  );
};

export default Products;
