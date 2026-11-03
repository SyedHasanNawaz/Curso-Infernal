import React, { useState } from 'react';
import Search from "./Search";
import { FaSearch } from 'react-icons/fa';

const Header = ({ setCategoryFilter, categories = [], search, setSearch }) => {
    const [isClicked, setClicked] = useState(false);

    return (
        <div className="bg-white border-b">
            <div className="bg-black text-white py-2">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <marquee className="text-sm">Free shipping on orders over $100</marquee>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-serif text-gray-900">CURSO INFERNAL</h1>
                </div>

                <div className="flex items-center justify-between">
                    <div className="w-32"></div>

                    <nav className="flex space-x-8">
                        <button
                            onClick={(e) => { e.preventDefault(); alert("new arrivals"); }}
                            className="text-red-500 font-medium hover:text-red-600 transition-colors"
                        >
                            New Arrivals
                        </button>

                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCategoryFilter(category._id);
                                }}
                                className="text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                {category.name}
                            </button>
                        ))}

                        <button
                            onClick={(e) => { e.preventDefault(); setCategoryFilter(''); }}
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            All Categories
                        </button>
                    </nav>

                    <div className="flex items-center space-x-4 w-32 justify-end">
                        <div className="relative">
                            <button
                                onClick={() => setClicked(!isClicked)}
                                className="text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                <FaSearch className="w-5 h-5" />
                            </button>

                            {isClicked && (
                                <div className="absolute right-0 top-full mt-2 w-52 bg-white border rounded-lg shadow-lg p-3 z-50">
                                    Search
                                    <Search setSearch={setSearch} search={search} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
