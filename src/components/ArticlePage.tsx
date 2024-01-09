import { article, images } from "../service";

interface ArticlePageProps {
  art: article;
}

function ArticlePage({ art }: ArticlePageProps) {
  return (
    <div className="flex flex-col p-3">
      <h1 className="text-2xl font-[Arial] font-bold">{art.title}</h1>
      <p className="text-slate-400 font-[Arial] font-semibold my-1">
        {art.author}
      </p>
      <p className="text-slate-500 font-[Arial] font-semibold my-1">
        {art.date}
      </p>
      <p className="text-end my-3">{art.type}</p>
      <p className="text-slate-600 font-[Arial]">{art.content}</p>
      {art.images ? (
        <ul className="m-1">
          {art.images.map((image: images) => (
            <img
              key={image.id}
              src={image.url}
              alt={String(image.id)}
              className="w-full max-h-[400px] p-2"
            />
          ))}
        </ul>
      ) : (
        <p className="text-center">Loading Images ...</p>
      )}
    </div>
  );
}

export default ArticlePage;
