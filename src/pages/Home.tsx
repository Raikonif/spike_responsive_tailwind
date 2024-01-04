import { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";
import Filter from "../components/Filter";
import Search from "../components/Search";
import { article, getArticles } from "../service";

function Home() {
  const [changeFilter, setChangeFilter] = useState<string>("ALL");
  const [articles, setArticles] = useState<article[]>([] as article[]);
  const [articlesFiltered, setArticlesFiltered] = useState<article[]>(articles);
  const allArticles = async () => {
    const articles = await getArticles();
    setArticles(articles);
  };
  useEffect(() => {
    allArticles();
  }, []);
  useEffect(() => {
    changeFilter !== "ALL"
      ? setArticlesFiltered(
          articles.filter(
            (article) => article.type.toUpperCase() === changeFilter
          )
        )
      : setArticlesFiltered(articles);
  }, [articles, changeFilter]);

  return (
    <div className="flex flex-col w-full">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col w-full sm:flex-row justify-center items-center">
          <Filter selected={changeFilter} setSelected={setChangeFilter} />
          <Search />
        </div>
      </div>
      <ArticleList articles={articlesFiltered} />
    </div>
  );
}

export default Home;
