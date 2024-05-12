import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList from './ArticlesList';
import { API_ENDPOINT, API_KEY } from '../config/constants';

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
        let url = `${API_ENDPOINT}/top-headlines?country=${country}&apiKey=${API_KEY}`;
        if (selectedCategory) {
          url += `&category=${selectedCategory}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
  
    fetchArticles();
  }, [country, selectedCategory]);
  

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex space-x-4 items-center">
        {/* <Navbar/> */}
        <p className="text-xl font-semibold ml-2">View favorites --</p>

        <select className="border-2 border-gray-200 bg-gray-100 px-4 py-2 rounded" onChange={handleCountryChange}
                value={country}>
          {countries.map((country, index) => (
            <option key={index} value={country.code}> {country.name}</option>
          ))}
        </select>

        <select className="border-2 border-gray-200 bg-gray-100 px-4 py-2 rounded" onChange={handleCategoryChange}
                value={selectedCategory}>
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
          ))}
        </select>
      </div>

      {(selectedCategory || country) && (
        <p className="text-xl m-2 font-semibold">
          Top {selectedCategory} headlines from {countries.find(c => c.code === country)?.name}
        </p>
      )}
      <ArticleList articles={articles}/>
    </div>
  );
};

export default Articles;
