import ArticlePage from "../components/ArticlePage";
import { article, getArticle } from "../service";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Blog() {
  const [addArticle, setAddArticle] = useState<article>({} as article);
  const { t } = useTranslation();
  const getFirstArticle = async () => {
    const article = await getArticle(1);
    setAddArticle(article);
  };
  function toUpperCaseFirstLetter(str: string) {
    str = str.toLowerCase();
    return str.replace(/^[a-z]/, (char) => char.toUpperCase());
  }

  useEffect(() => {
    getFirstArticle();
  }, []);

  return (
    <div className="flex flex-col p-6">
      <div className="flex items-center">
        <button className="text-slate-400">
          {toUpperCaseFirstLetter(t("HOME"))}
        </button>
        <h6 className="px-2 text-slate-400">{">"}</h6>
        <button className="rounded-md text-sm text-slate-400 px-2 py-1">
          Blog de Articulos
        </button>
      </div>
      <div className="flex items-center mt-3">
        <h6 className="text-sm bg-purple-600 text-white px-2 py-1 mb-5">
          {t("ARTICLE")}
        </h6>
      </div>
      {addArticle && <ArticlePage art={addArticle} />}
    </div>
  );
}

export default Blog;
