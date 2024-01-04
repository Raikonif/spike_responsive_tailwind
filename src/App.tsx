import ArticleList from "./components/ArticleList";
import Filter from "./components/Filter";
import Menu from "./components/Menu";
import Search from "./components/Search";
import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [changePage, setChangePage] = useState<string>("HOME");

  return (
    <>
      <div className="bg-slate-100 min-h-screen">
        <Menu selected={changePage} setSelected={setChangePage} />
        <div className="w-full pt-32 sm:pt-20 items-center justify-center p-1">
          {changePage == "HOME" && <Home />}
          {changePage == "BLOG" && <ArticleList />}
          {changePage == "ABOUT" && <ArticleList />}
        </div>
      </div>
    </>
  );
}

export default App;
