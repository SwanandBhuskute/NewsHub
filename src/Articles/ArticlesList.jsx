import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles }) => {
  return (
    <div>
      <hr className="my-3 border-t-2 border-black"/>
      {/* <h2 className="text-3xl font-bold mt-2 mb-4">Top headlines from {country}</h2> */}
      <h2 className="text-3xl font-bold mt-2 mb-4">Breaking news</h2>
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
