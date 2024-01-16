import { article } from "../service";
import { useTranslation } from "react-i18next";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import Slider from "../components/Slider";

interface ArticlePageProps {
  art: article;
}

function ArticlePage({ art }: ArticlePageProps) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-[Arial Black] font-bold">{art.title}</h1>
      <p className="text-slate-400 font-[Arial] text-sm font-semibold mb-1">
        {t("BY")} {art.author} - {art.date}
      </p>
      <div className="flex">
        <button className="mb-3 mr-1">
          <IoLogoWhatsapp
            size={36}
            className="p-1 rounded-xl text-violet-700 hover:border-2 active:text-violet-500 active:border-violet-300"
          />
        </button>
        <button className="mb-3 mr-1">
          <FaXTwitter
            size={36}
            className="p-1 rounded-xl text-violet-700 hover:border-2 active:text-violet-500 active:border-violet-300"
          />
        </button>
      </div>
      <p className="text-slate-600">{art.content}</p>
      {art.images ? (
        <Slider images={art.images} />
      ) : (
        <p className="text-center">Loading Images ...</p>
      )}
    </div>
  );
}

export default ArticlePage;
