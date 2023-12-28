import ArticleList from "./components/ArticleList";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu />
      <div className="bg-slate-300 w-full h-screen items-center justify-center">
        <div className="container mx-auto flex flex-col sm:flex-row">
          <ArticleList />
          <ArticleList />
        </div>
      </div>
    </>
  );
}

export default App;
