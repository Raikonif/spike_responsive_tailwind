import ArticlePage from "../components/ArticlePage";
import { article, getArticle } from "../service";
import { useEffect, useState } from "react";

function Blog() {
  const [addArticle, setAddArticle] = useState<article>({} as article);
  const getFirstArticle = async () => {
    const article = await getArticle(1);
    setAddArticle(article);
  };

  useEffect(() => {
    getFirstArticle();
  }, []);

  return <div>{addArticle && <ArticlePage art={addArticle} />}</div>;
}

export default Blog;
