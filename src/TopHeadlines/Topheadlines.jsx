import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList from '../Articles/ArticlesList';

const Topheadlines = () => {
  const [articles, setArticles] = useState([]);
  const [selectedSource, setSelectedSource] = useState('');
  const [sources, setSources] = useState([]);

  useEffect(() => {
    const fetchSources = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines/sources?apiKey=f76b19ba1357442ca06ae506b176997c');
        setSources(response.data.sources);
      } catch (error) {
        console.error('Error fetching sources:', error);
      }
    };

    fetchSources();
  }, []);

  const fetchTopHeadlines = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${selectedSource}&apiKey=f76b19ba1357442ca06ae506b176997c`);
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching top headlines:', error);
    }
  };

  const handleSourceChange = (event) => {
    setSelectedSource(event.target.value);
  };

  const handleFetchTopHeadlines = () => {
    fetchTopHeadlines();
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex space-x-4 mb-4">
        <select className="bg-blue-500 text-white px-4 py-2 rounded" onChange={handleSourceChange} value={selectedSource}>
          <option value="">Select Source</option>
          {sources.map((source) => (
            <option key={source.id} value={source.id}>{source.name}</option>
          ))}
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleFetchTopHeadlines}>Fetch Top Headlines</button>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Topheadlines;
