import { article } from "../service";

function Article({ id, title, author, date, content, images, type }: article) {
  const slicedContent = content.slice(0, 80) + " ...";
  const image = images[0];
  const openArticle = () => {
    const articleUrl = `/article/${encodeURIComponent(id)}`;
    window.open(articleUrl, "_blank");
  };
  return (
    <article
      className="flex flex-col w-full border rounded-md my-4 shadow-xl p-4 pt-7 bg-white cursor-pointer"
      onClick={openArticle}
    >
      <h2 className="font-bold">{title}</h2>
      <p className="text-slate-400 font-bold font-[Arial]">{date}</p>
      <h3 className="font-bold font-[Arial] text-violet-600">{author}</h3>
      <p className="font-[Arial] m-2">{slicedContent}</p>
      <img
        src={image.url}
        alt={String(image.id)}
        className="w-full max-h-[200px] border-2 rounded-md"
      />
    </article>
  );
}

export default Article;
