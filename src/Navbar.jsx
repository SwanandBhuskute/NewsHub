const Navbar = () => {
  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center align-items text-white">
        <h1 className="text-2xl font-bold">NewsHub</h1>
        <p className="text-xl font-semibold ml-2">- One stop for Live News</p>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="/home" className="text-white text-lg hover:text-gray-200">Home</a>
        </li>
        <li>
          <a href="/topheadlines" className="text-white text-lg hover:text-gray-200">Top Headlines</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
