import { BsFillSearchHeartFill } from "react-icons/bs";
function Search() {
  return (
    <div className="flex items-center justify-between w-4/5 sm:w-full mx-2 p-2 bg-violet-600 rounded-lg">
      <input
        className="p-2 rounded-lg w-full"
        type="text"
        placeholder="Search"
      />
      <BsFillSearchHeartFill className="ml-4 mr-2 text-white" size={24} />
    </div>
  );
}

export default Search;
