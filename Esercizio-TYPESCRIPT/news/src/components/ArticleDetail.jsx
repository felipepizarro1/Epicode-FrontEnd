import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${articleId}/`)
    .then((res)=>res.json())
    .then(data => {
      console.log(data)
      setArticle(data)})
    .catch(console.error);
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.summary}</p>
      {/* Otros detalles del artículo */}
    </div>
  );
};

export default ArticleDetail;