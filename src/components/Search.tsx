import { BsFillSearchHeartFill } from "react-icons/bs";
function Search() {
  return (
    <div className="flex items-center justify-between w-4/5 sm:w-full sm:mt-5 mx-2 rounded-lg bg-violet-600">
      <input
        className="rounded-l-md p-3 w-full h-full font-[Arial] focus:outline-none border"
        type="text"
        placeholder="Search"
        aria-autocomplete="none"
        autoComplete="off"
      />
      <button className="justify-center flex h-full w-1/4 bg-violet-600 rounded-l-none rounded-md text-white">
        <BsFillSearchHeartFill size={24} />
      </button>
    </div>
  );
}

export default Search;
