import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
  return (
    <div>
      <h1>Lista di Articoli</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;