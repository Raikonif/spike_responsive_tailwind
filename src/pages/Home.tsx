import { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";
import Filter from "../components/Filter";
import Search from "../components/Search";
import { article, getArticles } from "../service";

const ALL = "ALL";
const PAP = "PAPS";
const CITHOLOGY = "CITHOLOGY";
const HISTOPATHOLOGY = "HISTOPATHOLOGY";

function Home() {
  const [changeFilter, setChangeFilter] = useState<string>(ALL);
  const [changeSearch, setChangeSearch] = useState<string>("");
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
    if (
      changeSearch !== "" &&
      changeSearch !== undefined &&
      changeSearch !== null &&
      changeSearch !== " " &&
      changeSearch !== ALL &&
      changeSearch !== PAP &&
      changeSearch !== CITHOLOGY &&
      changeSearch !== HISTOPATHOLOGY
    ) {
      setArticlesFiltered(
        articles.filter((article) =>
          article.title.toUpperCase().includes(changeSearch.toUpperCase())
        )
      );
    } else {
      setArticlesFiltered(articles);
    }
  }, [articles, changeSearch]);

  useEffect(() => {
    changeFilter !== ALL
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
          <Search search={changeSearch} setSearch={setChangeSearch} />
        </div>
      </div>
      <ArticleList articles={articlesFiltered} />
    </div>
  );
}

export default Home;
