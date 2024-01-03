import { useEffect } from "react";
import { getArticles } from "../service";
import { useState } from "react";
import { article, images } from "../service/index";
import Article from "./Article";
function ArticleList() {
  const [articles, setArticles] = useState<article[]>([]);
  const allArticles = async () => {
    const articles = await getArticles();
    setArticles(articles);
  };

  useEffect(() => {
    allArticles();
  }, []);

  return (
    <ul className="mx-3 grid sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article: article) => (
        <li className="mx-2">
          <Article
            id={article.id}
            title={article.title}
            author={article.author}
            content={article.content}
            date={article.date}
            images={article.images}
          />
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
