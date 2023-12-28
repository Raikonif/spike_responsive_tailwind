import { images, article } from "../service";

function Article({ title, author, date, content, images }: article) {
  const slicedContent = content.slice(0, 100) + " . . . ";
  const image = images[0];
  return (
    <article className="flex flex-col h-1/8 w-full">
      <h2 className="font-bold font-[Arial]">{title}</h2>
      <p className="text-slate-400 font-bold font-[Arial]">{date}</p>
      <h3 className="font-bold font-[Arial] text-violet-600">{author}</h3>
      <p className="font-[Arial] m-2">{slicedContent}</p>
      {/* {images.map((image: images) => ( */}
      <img
        src={image.url}
        alt={String(image.id)}
        className="w-full max-h-[200px]"
      />
      {/* ))} */}
    </article>
  );
}

export default Article;
