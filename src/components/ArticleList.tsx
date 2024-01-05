import { article } from "../service/index";
import Article from "./Article";

interface ArticleListProps {
  articles: article[];
}
function ArticleList({ articles }: ArticleListProps) {
  const articlesLength = articles.length;
  return (
    <>
      <ul className="mx-3 grid sm:grid-cols-2 lg:grid-cols-3">
        {articlesLength > 0 &&
          articles.map((article: article) => (
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
      {articlesLength === 0 && (
        <div className="w-full justify-center items-center flex mt-10">
          <h1 className="text-center text-2xl h-full w-full">
            No articles found
          </h1>
        </div>
      )}
    </>
  );
}

export default ArticleList;
