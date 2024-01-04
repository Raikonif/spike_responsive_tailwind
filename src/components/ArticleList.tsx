import { article } from "../service/index";
import Article from "./Article";

interface ArticleListProps {
  articles: article[];
}
function ArticleList({ articles }: ArticleListProps) {
  return (
    <ul className="mx-3 grid sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article: article) => (
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
