import ArticleList from "./components/ArticleList";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu />
      <div className="bg-slate-300 w-full h-screen">
        <div className="container mx-auto">
          <ArticleList />
        </div>
      </div>
    </>
  );
}

export default App;
