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
    <div className="m-2">
      <ul>
        {articles.map((article: article) => (
          <li>
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
    </div>
  );
}

export default ArticleList;
