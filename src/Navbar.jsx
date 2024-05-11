const Navbar = () => {
    return (
      <nav className="bg-blue-500 px-4 py-2 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
        <div className="text-white text-xl font-bold">NewsHub</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/topheadlines" className="text-white hover:text-gray-200">Top Headlines</a>
          </li>
          {/* Add more links here if needed */}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  