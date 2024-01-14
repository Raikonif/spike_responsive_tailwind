import { article, images } from "../service";
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
      <p className="font-semibold my-3">{art.type}</p>
      <div className="flex">
        <IoLogoWhatsapp size={24} className="mb-3 mr-1" />
        <FaXTwitter size={24} className="mb-3 ml-1" />
      </div>
      <p className="text-slate-600">{art.content}</p>
      {art.images ? (
        // <ul className="my-2">
        //   {art.images.map((image: images) => (
        //     <img
        //       key={image.id}
        //       src={image.url}
        //       alt={String(image.id)}
        //       className="w-full max-h-[400px] my-1 mb-3 border"
        //     />
        //   ))}
        // </ul>
        <Slider images={art.images} />
      ) : (
        <p className="text-center">Loading Images ...</p>
      )}
    </div>
  );
}

export default ArticlePage;
