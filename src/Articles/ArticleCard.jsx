import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className="border border-gray-200 p-4 mb-4">
      <h3 className="text-xl font-bold mb-2">{article.title}</h3>
      <p className="text-gray-700 mb-2">{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
    </div>
  );
};

export default ArticleCard;
