"use client";
import { useState } from 'react';
import { Oswald, League_Spartan } from "next/font/google"
import Tshirt from "../assets/tshirt.png"
import Rubashka from "../assets/rubashka.png"
import Image from 'next/image';

const oswald = Oswald({ weight: "400", subsets: ["latin"] })
const spartan = League_Spartan({ weight: "700", subsets: ["latin"] })

interface OpenSections {
  price: boolean;
  size: boolean;
  dressStyle: boolean;
}

const products = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    image: Tshirt,
    price: 120,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    image: Rubashka,
    price: 240,
    oldPrice: 260,
    rating: 3.5,
    discount: 20,
  },
  {
    id: 3,
    title: "Checkered Shirt",
    image: Rubashka,
    price: 180,
    rating: 4.5,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    image: Tshirt,
    price: 130,
    oldPrice: 160,
    rating: 4.5,
    discount: 30,
  },
  {
    id: 5,
    title: "T-shirt with Tape Details",
    image: Tshirt,
    price: 120,
    rating: 4.5,
  },
  {
    id: 6,
    title: "Skinny Fit Jeans",
    image: Rubashka,
    price: 240,
    oldPrice: 260,
    rating: 3.5,
    discount: 20,
  },
  {
    id: 7,
    title: "Checkered Shirt",
    image: Rubashka,
    price: 180,
    rating: 4.5,
  },
  {
    id: 8,
    title: "Sleeve Striped T-shirt",
    image: Tshirt,
    price: 130,
    oldPrice: 160,
    rating: 4.5,
    discount: 30,
  },
  {
    id: 9,
    title: "T-shirt with Tape Details",
    image: Tshirt,
    price: 120,
    rating: 4.5,
  },
]

const CategoryPage = () => {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedSize, setSelectedSize] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [openSections, setOpenSections] = useState<OpenSections>({
    price: true,
    size: true,
    dressStyle: true
  });

  const categories: string[] = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
  const sizes: string[] = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
  const dressStyles: string[] = ['Casual', 'Formal', 'Party', 'Gym'];

  const toggleSection = (section: keyof OpenSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Pagination
  const totalPages = 10;
  const getPageNumbers = () => {
    const pages = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="flex min-h-screen bg-white mt-20 mb-25">
      {/* Filters Sidebar - faqat md dan keyin ko'rinadi */}
      <div className="hidden md:block md:w-80 border-r border-gray-200 p-6 h-[calc(100vh-80px)]">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`${oswald.className} text-xl font-bold`}>Filters</h2>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>

        {/* Categories */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between py-3 cursor-pointer hover:text-gray-600 transition-colors">
              <span className="text-gray-600">{category}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <button
            onClick={() => toggleSection('price')}
            className="w-full flex items-center justify-between mb-4 cursor-pointer"
          >
            <h3 className="font-semibold text-lg">Price</h3>
            <svg 
              className={`w-4 h-4 transition-transform ${openSections.price ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openSections.price && (
            <div>
              <input
                type="range"
                min="50"
                max="200"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
              <div className="flex items-center justify-between mt-4">
                <span className="px-4 py-2 bg-gray-100 rounded-lg font-semibold">${priceRange[0]}</span>
                <span className="px-4 py-2 bg-gray-100 rounded-lg font-semibold">${priceRange[1]}</span>
              </div>
            </div>
          )}
        </div>

        {/* Size */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <button
            onClick={() => toggleSection('size')}
            className="w-full flex items-center justify-between mb-4 cursor-pointer"
          >
            <h3 className="font-semibold text-lg">Size</h3>
            <svg 
              className={`w-4 h-4 transition-transform ${openSections.size ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openSections.size && (
            <div className="flex flex-wrap gap-2">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-xs rounded-full transition-colors cursor-pointer ${
                    selectedSize === size
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dress Style */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('dressStyle')}
            className="w-full flex items-center justify-between mb-4 cursor-pointer"
          >
            <h3 className="font-semibold text-lg">Dress Style</h3>
            <svg 
              className={`w-4 h-4 transition-transform ${openSections.dressStyle ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openSections.dressStyle && (
            <div>
              {dressStyles.map((style, index) => (
                <div key={index} className="flex items-center justify-between py-3 cursor-pointer hover:text-gray-600 transition-colors">
                  <span className="text-gray-600">{style}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Apply Filter Button */}
        <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors cursor-pointer">
          Apply Filter
        </button>
      </div>

      {/* Products Section */}
      <div className="flex-1 p-4 md:p-8">
        {/* Mobile Filter Button */}
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden mb-4 w-full bg-black text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          Filters
        </button>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4">
          <h1 className={`${oswald.className} text-2xl md:text-4xl font-bold`}>Casual</h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full md:w-auto">
            <span className="text-sm text-gray-500">Showing 1-10 of 100 Products</span>
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="border-none bg-transparent font-semibold cursor-pointer focus:outline-none text-sm">
                <option>Most popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid - mobile da 2, md dan keyin 3 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square bg-gray-100 rounded-2xl mb-4 overflow-hidden relative">
                <Image 
                  src={product.image} 
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2 line-clamp-1">{product.title}</h3>
              <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-3 h-3 md:w-5 md:h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs md:text-sm text-gray-500">{product.rating}/5</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                <span className="text-lg md:text-2xl font-bold">${product.price}</span>
                {product.oldPrice && (
                  <>
                    <span className="text-sm md:text-xl text-gray-400 line-through">${product.oldPrice}</span>
                    <span className="text-[10px] md:text-xs text-red-500 bg-red-50 px-2 md:px-3 py-0.5 md:py-1 rounded-full font-semibold">
                      -{product.discount}%
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1 md:gap-2 pt-6 md:pt-8 border-t border-gray-200">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className={`px-2 md:px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
              currentPage === 1
                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1 md:gap-2">
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && setCurrentPage(page)}
                disabled={page === '...'}
                className={`min-w-[32px] md:min-w-[40px] h-8 md:h-10 text-sm md:text-base rounded-lg transition-colors cursor-pointer${
                  page === currentPage
                    ? 'bg-black text-white font-semibold'
                    : page === '...'
                    ? 'cursor-default text-gray-400'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className={`px-2 md:px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
              currentPage === totalPages
                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;