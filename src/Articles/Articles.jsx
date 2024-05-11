import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList from './ArticlesList';
import Navbar from '../Navbar';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState('us'); 
  const [countries, setCountries] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([
    'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
  ]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const formattedCountries = response.data.map(country => ({
          code: country.cca2.toLowerCase(),
          name: country.name.common
        })).filter(country => [
          'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 
          'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 
          'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'
        ].includes(country.code));
        setCountries(formattedCountries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=f76b19ba1357442ca06ae506b176997c`;
        if (selectedCategory) {
          url += `&category=${selectedCategory}`;
        }
        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [country, selectedCategory]); // Fetch articles whenever country changes

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="container mx-auto mt-8">
        <div className="flex space-x-4">
        {/* <Navbar/> */}
        <select className="bg-blue-500 text-white px-4 py-2 rounded" onChange={handleCountryChange} value={country}>
          {countries.map((country, index) => (
            <option key={index} value={country.code}>{index + 1}. {country.name}</option>
          ))}
        </select>

        <select className="bg-blue-500 text-white px-4 py-2 rounded" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
          ))}
        </select>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Articles;
