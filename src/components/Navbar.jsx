import { useState } from "react";
import { FaSearch, FaEdit, FaBookmark } from "react-icons/fa";
import Bookmark from "./Bookmark";
import { useMeal } from "../utils/useMeal";

const Navbar = () => {
  const { inputValue, setInputValue, bookmarked, data } = useMeal();
  const [showDropdown, setShowDropdown] = useState(false);

  function dropMenu() {
    setShowDropdown((prev) => !prev);
  }

  return (
    <div className="flex justify-between mx-40 px-10 py-5 items-center bg-gray-100 rounded-tl-4xl rounded-tr-4xl ">
      <img src="/assets/logo.png" alt="logo" width={150} height={150} />
      <div>
        <input
          type="text"
          placeholder="Search for recipe"
          className="bg-white w-80 pl-5 py-2.5 outline-none rounded-4xl "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="bg-orange-300 px-5 py-3  left-185 flex items-center gap-3 rounded-4xl top-26 absolute hover:bg-orange-400">
          <FaSearch />
          <p className="text-sm font-semibold">SEARCH</p>
        </button>
      </div>
      <div className="flex items-center gap-15 relative">
        <button className="flex items-center gap-2 " onClick={dropMenu}>
          <FaBookmark className="text-xl text-orange-300" />
          <p className="text-sm  font-semibold hover:text-orange-400">
            BOOKMARKS
          </p>
        </button>
        {showDropdown && <Bookmark bookmarked={bookmarked} data={data} />}
      </div>
    </div>
  );
};

export default Navbar;
