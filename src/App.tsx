import ArticleList from "./components/ArticleList";
import Filter from "./components/Filter";
import Menu from "./components/Menu";
import Search from "./components/Search";

function App() {
  const retrieveID = 0;
  return (
    <>
      <div className="bg-slate-700 min-h-screen">
        <Menu />
        <div className="bg-slate-700 w-full pt-32 sm:pt-20 items-center justify-center p-1">
          <div className="container mx-auto flex flex-col">
            <div className="flex flex-col w-full sm:flex-row justify-center items-center">
              <Filter />
              <Search />
            </div>
            <ArticleList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
