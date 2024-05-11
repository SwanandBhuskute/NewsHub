import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList from '../Articles/ArticlesList';
import { API_ENDPOINT, API_KEY } from '../config/constants';

const Topheadlines = () => {
  const [articles, setArticles] = useState([]);
  const [selectedSource, setSelectedSource] = useState('abc-news');
  const [sources, setSources] = useState([]);

  useEffect(() => {
    const fetchSources = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/top-headlines/sources?apiKey=${API_KEY}`);
        setSources(response.data.sources);
      } catch (error) {
        console.error('Error fetching sources:', error);
      }
    };

    fetchSources();
  }, [selectedSource]);

  const fetchTopHeadlines = async () => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/top-headlines?sources=${selectedSource}&apiKey=${API_KEY}`);
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching top headlines:', error);
    }
  };

  useEffect(() => {
    if (selectedSource) {
      fetchTopHeadlines();
    }
  }, [selectedSource]);

  const handleSourceChange = (event) => {
    setSelectedSource(event.target.value);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex space-x-4 mb-4 items-center align-items">
        <h2 className='text-xl font-semibold'>Select your favorite News channel - </h2>
        <select className="border-2 border-gray-200 bg-gray-100 px-4 py-2 rounded" onChange={handleSourceChange} value={selectedSource}>
          <option value="">Select Source</option>
          {sources.map((source) => (
            <option key={source.id} value={source.id} className='hover:bg-gray-700 hover:text-gray-200'>{source.name}</option>
          ))}
        </select>
        </div>
        {selectedSource && (
          <p className="text-xl m-2 font-semibold">
            Top headlines from {selectedSource}
          </p>
        )}
      <ArticleList articles={articles} />
    </div>
  );
};

export default Topheadlines;
