import Products from "./ui/Products";

const Bookmark = ({ bookmarked, data }) => {
  return (
    <div className="absolute -left-18 top-5 mt-2 w-67 bg-white border border-gray-300 rounded shadow-lg z-50">
      {bookmarked.length === 0 ? (
        <p className="p-4 text-gray-500">No bookmarks yet.</p>
      ) : (
        <ul>
          {bookmarked.map((bookmark) => {
            const fullRecipe = data.find((item) => item.idMeal === bookmark.id);
            return (
              fullRecipe && (
                <Products key={fullRecipe.idMeal} meal={fullRecipe} />
              )
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Bookmark;
