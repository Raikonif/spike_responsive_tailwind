import { useState } from "react";
import ArticleList from "../components/ArticleList";
import Filter from "../components/Filter";
import Search from "../components/Search";

function Home() {
  const [changeFilter, setChangeFilter] = useState<string>("ALL");
  return (
    <div className="flex flex-col w-full">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col w-full sm:flex-row justify-center items-center">
          <Filter selected={changeFilter} setSelected={setChangeFilter} />
          <Search />
        </div>
      </div>
      <ArticleList filter={changeFilter} />
    </div>
  );
}

export default Home;
