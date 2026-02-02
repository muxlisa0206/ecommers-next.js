'use client'
import { useState } from 'react'
import Image from 'next/image'
import Logo from '../../assets/SHOP.CO.svg'
import Card from '../../assets/card.svg'
import Account from '../../assets/account.svg'
import Menu from '../../assets/menu.svg'
import Search from '../../assets/search.svg'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-10 py-4 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-50"
        >
          <Image src={Menu} alt="menu" width={24} height={24} />
        </button>

        <Link href="/">
          <Image src={Logo} alt="logo" width={120} height={30} />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          <li><Link href="/shop" className="hover:text-gray-600 font-medium">Shop</Link></li>
          <li><Link href="/on-sale" className="hover:text-gray-600 font-medium">On Sale</Link></li>
          <li><Link href="/new-arrivals" className="hover:text-gray-600 font-medium">New Arrivals</Link></li>
          <li><Link href="/brands" className="hover:text-gray-600 font-medium">Brands</Link></li>
        </ul>

        <div className="hidden xl:flex w-full max-w-144.25 h-12 items-center gap-3 
                bg-[#F0F0F0] border border-gray-200 rounded-full px-4">
  
        <svg
        className="w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 3 10.5a7.5 7.5 0 0 0 13.15 6.15Z"
        />
        </svg>

        <input
            type="text"
            placeholder="Search for products..."
            className="w-full text-sm text-gray-900 placeholder-gray-400 
                outline-none border-none bg-transparent"
        />
        </div>


        <div className="flex items-center gap-4">
          <Image src={Search} alt="search" width={24} height={24} className="cursor-pointer sm:hidden" />
          <Link href={"/cart"}><Image src={Card} alt="cart" width={24} height={24} className="cursor-pointer" /></Link>
          <Link href={"/account"}><Image src={Account} alt="account" width={24} height={24} className="cursor-pointer" /></Link>        
        </div>
      </div>

      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 pt-20">
          <ul className="flex flex-col gap-6">
            <li>
              <Link 
                href="/shop" 
                className="text-lg hover:text-gray-600 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link 
                href="/on-sale" 
                className="text-lg hover:text-gray-600 block"
                onClick={() => setIsMenuOpen(false)}
              >
                On Sale
              </Link>
            </li>
            <li>
              <Link 
                href="/new-arrivals" 
                className="text-lg hover:text-gray-600 block"
                onClick={() => setIsMenuOpen(false)}
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link 
                href="/brands" 
                className="text-lg hover:text-gray-600 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Brands
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Header