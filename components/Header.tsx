'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 shadow-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/1.png" alt="vPrime Tech Logo" width={200} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center">
              Services <ChevronDown className="ml-1" size={16} />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 bg-white shadow-2xl rounded-lg py-5 w-48">
                <Link href="/services/software-procurement" className="block px-2 py-2 hover:bg-gray-100">
                  Software Procurement
                </Link>
                <Link href="/services/cloud-migration" className="block px-4 py-2 hover:bg-gray-100">
                  Cloud Migration
                </Link>
                <Link href="/services/tailored-solutions" className="block px-4 py-2 hover:bg-gray-100">
                  Tailored Solutions
                </Link>
              </div>
            )}
          </div>
          <Link href="/partners">Our Partners</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Contact
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-2">
          <div>
            <button
              className="flex items-center justify-between w-full px-4 py-2"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              {isServicesOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isServicesOpen && (
              <div className="bg-white shadow-md py-2">
                <Link href="/services/software-procurement" className="block px-4 py-2 hover:bg-gray-100">
                  Software Procurement
                </Link>
                <Link href="/services/cloud-migration" className="block px-4 py-2 hover:bg-gray-100">
                  Cloud Migration
                </Link>
                <Link href="/services/tailored-solutions" className="block px-4 py-2 hover:bg-gray-100">
                  Tailored Solutions
                </Link>
              </div>
            )}
          </div>
          <Link href="/partners" className="block px-4 py-2">
            Our Partners
          </Link>
          <Link href="/about" className="block px-4 py-2">
            About
          </Link>
          <Link href="/contact" className="block px-4 py-2">
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
