function ArticlePage(id) {
    const retrievingArticle = async (id) => {
        const article = await getArticle(id);
        setArticle(article);
    }
    return (
    <div className="flex flex-col">
      <h1>{data?.title}</h1>
      <h3>{data?.content}</h3>
    </div>
  );
}

export default ArticlePage;
