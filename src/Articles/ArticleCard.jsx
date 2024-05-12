import React, { useState, useRef } from 'react';

const ArticleCard = ({ article }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setShowModal(true);
    // Scroll to the top of the modal when it opens
    modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const formatDate = (dateString) => {
    // Format date using toLocaleDateString
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <div className="rounded-lg mb-3 shadow-lg bg-white overflow-hidden flex flex-col md:flex-row">
        {article.urlToImage && (
          <img src={article.urlToImage} alt={article.title} className="w-full md:w-40 h-auto object-cover object-center" />
        )}
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
          <p className="text-gray-700 mb-4">{article.description}</p>
          <p className="text-gray-700 mb-4">Published: {formatDate(article.publishedAt)}</p>
          <button onClick={toggleModal} className="text-blue-500 hover:underline">Read more</button>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center overflow-y-auto justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md " ref={modalRef}>
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="w-full h-auto object-cover object-center mb-4 rounded-lg" />
            )}
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-4">{formatDate(article.publishedAt)}</p>
            <p className="text-gray-700 mb-4">{article.description}</p>
            <p className="text-gray-700 mb-4">{article.content}</p>
            <button
              onClick={handleCloseModal}
              className='bg-red-500 text-white px-3 py-1 mt-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300'
            >
              Close
            </button>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="px-3 py-1 mt-3 text-blue-500 hover:underline">Read full article</a>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleCard;




// import React from 'react';

// const ArticleCard = ({ article }) => {
//   return (
//     <div className="border border-gray-200 p-4 mb-4">
//       <h3 className="text-xl font-bold mb-2">{article.title}</h3>
//       <p className="text-gray-700 mb-2">{article.description}</p>
//       <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
//     </div>
//   );
// };

// export default ArticleCard;
