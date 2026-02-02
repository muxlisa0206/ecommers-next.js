import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ChevronRight, Tag } from 'lucide-react';
import Tshirt from "../assets/tshirt.png"
import Rubashka from "../assets/rubashka.png"

const CartPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 mb-[100px]">
        
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 sm:mb-8 mt-10">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-black font-medium">Cart</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10">
          YOUR CART
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          <div className="lg:col-span-2">
            <div className="border border-gray-200 rounded-[20px] p-4 sm:p-6">
              <div className="space-y-4 sm:space-y-6">
                
                <div className="flex gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-gray-200">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex-shrink-0 bg-[#F0EEED] rounded-[10px] overflow-hidden">
                    <Image
                      src={Tshirt}
                      alt="Gradient Graphic T-shirt"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-base sm:text-lg lg:text-xl">
                        Gradient Graphic T-shirt
                      </h3>
                      <button className="flex-shrink-0 text-red-500 hover:text-red-700 transition-colors p-1">
                        <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      Size: <span className="text-black">Large</span>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                      Color: <span className="text-black">White</span>
                    </p>

                    <div className="flex items-center justify-between">
                      <p className="font-bold text-xl sm:text-2xl">$145</p>

                      <div className="flex items-center gap-3 sm:gap-4 bg-[#F0F0F0] rounded-full px-4 sm:px-5 py-2 sm:py-2.5">
                        <button className="text-gray-600 hover:text-black transition-colors w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                          <span className="text-lg sm:text-xl font-medium">−</span>
                        </button>
                        <span className="font-medium text-sm sm:text-base min-w-[20px] text-center">
                          1
                        </span>
                        <button className="text-gray-600 hover:text-black transition-colors w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                          <span className="text-lg sm:text-xl font-medium">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-gray-200">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex-shrink-0 bg-[#F0EEED] rounded-[10px] overflow-hidden">
                    <Image
                      src={Rubashka}
                      alt="Checkered Shirt"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-base sm:text-lg lg:text-xl">
                        Checkered Shirt
                      </h3>
                      <button className="flex-shrink-0 text-red-500 hover:text-red-700 transition-colors p-1">
                        <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      Size: <span className="text-black">Medium</span>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                      Color: <span className="text-black">Red</span>
                    </p>

                    <div className="flex items-center justify-between">
                      <p className="font-bold text-xl sm:text-2xl">$180</p>

                      <div className="flex items-center gap-3 sm:gap-4 bg-[#F0F0F0] rounded-full px-4 sm:px-5 py-2 sm:py-2.5">
                        <button className="text-gray-600 hover:text-black transition-colors w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                          <span className="text-lg sm:text-xl font-medium">−</span>
                        </button>
                        <span className="font-medium text-sm sm:text-base min-w-[20px] text-center">
                          1
                        </span>
                        <button className="text-gray-600 hover:text-black transition-colors w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                          <span className="text-lg sm:text-xl font-medium">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex-shrink-0 bg-[#F0EEED] rounded-[10px] overflow-hidden">
                    <Image
                      src={Rubashka}
                      alt="Skinny Fit Jeans"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-base sm:text-lg lg:text-xl">
                        Skinny Fit Jeans
                      </h3>
                      <button className="flex-shrink-0 text-red-500 hover:text-red-700 transition-colors p-1">
                        <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      Size: <span className="text-black">Large</span>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                      Color: <span className="text-black">Blue</span>
                    </p>

                    <div className="flex items-center justify-between">
                      <p className="font-bold text-xl sm:text-2xl">$240</p>

                      <div className="flex items-center gap-3 sm:gap-4 bg-[#F0F0F0] rounded-full px-4 sm:px-5 py-2 sm:py-2.5">
                        <button className="text-gray-600 hover:text-black transition-colors w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                          <span className="text-lg sm:text-xl font-medium">−</span>
                        </button>
                        <span className="font-medium text-sm sm:text-base min-w-[20px] text-center">
                          1
                        </span>
                        <button className="text-gray-600 hover:text-black transition-colors w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                          <span className="text-lg sm:text-xl font-medium">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded-[20px] p-5 sm:p-6 lg:p-8 lg:sticky lg:top-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span className="text-sm sm:text-base">Subtotal</span>
                  <span className="font-bold text-black text-base sm:text-lg">
                    $565
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="text-sm sm:text-base">Discount (-20%)</span>
                  <span className="font-bold text-red-500 text-base sm:text-lg">
                    -$113
                  </span>
                </div>
                <div className="flex justify-between text-gray-600 pb-4 border-b border-gray-200">
                  <span className="text-sm sm:text-base">Delivery Fee</span>
                  <span className="font-bold text-black text-base sm:text-lg">
                    $15
                  </span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-medium text-base sm:text-lg">Total</span>
                  <span className="font-bold text-xl sm:text-2xl">
                    $467
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex gap-2 sm:gap-3">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Add promo code"
                      className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-[#F0F0F0] rounded-full text-sm sm:text-base outline-none focus:ring-2 focus:ring-gray-300 transition-all"
                    />
                  </div>
                  <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-full font-medium text-sm sm:text-base hover:bg-gray-800 transition-colors whitespace-nowrap">
                    Apply
                  </button>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group">
                Go to Checkout
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;