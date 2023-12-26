interface IArticle {
  title: string;
  author: string;
  date: string;
  content: string;
  images: string[];
}

function Article({ title, author, date, content, images }: IArticle) {
  return (
    <article className="flex flex-col">
      <h1>{title}</h1>
      <h3>{author}</h3>
      <p>{date}</p>
      <p>{content}</p>
      <img src={images[0]} alt="article" />
    </article>
  );
}

export default Article;
