import React from "react";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="absolute -top-[40px] sm:-top-[90px] lg:-top-[100px] left-0 w-full z-7 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="bg-black text-white rounded-[20px] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-16 lg:py-14">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight text-center md:text-left">
                STAY UPTO DATE ABOUT <br className="hidden sm:block" /> 
                OUR LATEST OFFERS
              </h2>

              <div className="w-full md:w-auto flex flex-col gap-3 sm:gap-4 md:min-w-[320px] lg:min-w-[350px]">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 sm:px-5 py-2.5 sm:py-3 pl-10 sm:pl-12 rounded-full bg-white text-black text-sm sm:text-base outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-gray-400"
                  />
                  <svg
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <button className="w-full bg-white text-black font-semibold py-2.5 sm:py-3 cursor-pointer px-4 sm:px-5 rounded-full text-sm sm:text-base hover:bg-gray-100 transition-colors">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F0F0F0] pt-55 sm:pt-60 lg:pt-40 pb-8 sm:pb-10 lg:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
            
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/">
                <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-5 cursor-pointer hover:opacity-80 transition-opacity">
                  SHOP.CO
                </h3>
              </Link>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-md">
                We have clothes that suits your style and which youre proud to wear. From women to men.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <Link 
                  href="#" 
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <Link 
                  href="#" 
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <Link 
                  href="#" 
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <Link 
                  href="#" 
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm sm:text-base mb-4 sm:mb-5 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm sm:text-base mb-4 sm:mb-5 uppercase tracking-wider">
                Help
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    Delivery Details
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm sm:text-base mb-4 sm:mb-5 uppercase tracking-wider">
                FAQ
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    Account
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    Manage Deliveries
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    Payments
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm sm:text-base mb-4 sm:mb-5 uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    Free eBooks
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    Development Tutorial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    How to - Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-sm sm:text-base hover:text-black transition-colors">
                    Youtube Playlist
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-10 sm:mt-12 lg:mt-16 pt-5 sm:pt-6 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">
              Shop.co © 2000-2023, All Rights Reserved
            </p>

            <div className="flex items-center gap-2 flex-wrap justify-center">
              <div className="bg-white border border-gray-200 rounded px-2.5 py-1.5 sm:px-3">
                <span className="text-xs font-semibold text-blue-600">VISA</span>
              </div>
              <div className="bg-white border border-gray-200 rounded px-2.5 py-1.5 sm:px-3">
                <div className="flex gap-0.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-400 rounded-full -ml-1"></div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded px-2.5 py-1.5 sm:px-3">
                <span className="text-xs font-semibold text-blue-600">PayPal</span>
              </div>
              <div className="bg-white border border-gray-200 rounded px-2.5 py-1.5 sm:px-3">
                <span className="text-xs font-semibold">Apple Pay</span>
              </div>
              <div className="bg-white border border-gray-200 rounded px-2.5 py-1.5 sm:px-3">
                <span className="text-xs font-semibold">G Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;