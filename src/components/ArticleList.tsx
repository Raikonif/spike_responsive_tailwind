import { useEffect } from "react";
import { getArticles } from "../service";
import { useState } from "react";
import { article } from "../service/index";
import Article from "./Article";

interface ArticleListProps {
  filter: string;
}
function ArticleList({ filter }: ArticleListProps) {
  const [articles, setArticles] = useState<article[]>([] as article[]);
  const [filteredArticles, setFilteredArticles] = useState<article[]>(articles);

  const allArticles = async () => {
    const articles = await getArticles();
    setArticles(articles);
    setFilteredArticles(articles);
  };

  useEffect(() => {
    allArticles();
  }, []);
  const getFilteredArticles = async (filter: string) => {
    filter !== "ALL"
      ? setFilteredArticles(
          articles.filter((article) => article.type === filter)
        )
      : setFilteredArticles(articles);
  };

  useEffect(() => {
    getFilteredArticles(filter);
  }, []);

  return (
    <ul className="mx-3 grid sm:grid-cols-2 lg:grid-cols-3">
      {filteredArticles.map((article: article) => (
        <li className="mx-2" key={article.id}>
          <Article
            id={article.id}
            title={article.title}
            author={article.author}
            content={article.content}
            date={article.date}
            images={article.images}
            type={article.type}
          />
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
