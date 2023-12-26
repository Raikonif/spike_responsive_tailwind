import { useEffect } from "react";
import { getArticles } from "../service";
import { useState } from "react";
import { article, images } from "../service/index";
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
    <div>
      <ul>
        {articles.map((article: article) => (
          <li>
            <h2>{article.title}</h2>
            <p>{article.date}</p>
            <h3>{article.author}</h3>
            <p>{article.content}</p>
            {article.images.map((image: images) => (
              <img src={image.url} alt={String(image.id)} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
