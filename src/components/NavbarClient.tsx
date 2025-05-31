'use client';

import Link from 'next/link';
import LogoutButton from './LogoutButton';
import { useState } from 'react';

type NavbarClientProps = {
  user: {
    id: string;
    name: string | null;
    email: string;
  } | null;
};

const NavbarClient = ({ user }: NavbarClientProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-teal-200 px-4 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-teal-700 hover:text-teal-800 transition"
        >
          Sentry Board
        </Link>

        {/* Hamburger Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-2xl text-teal-700 focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4 font-semibold">
          {user ? (
            <>
              <Link href="/tickets/new" className="text-teal-700">New Ticket</Link>
              <Link href="/tickets" className="text-teal-700">My Tickets</Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login" className="text-teal-700 hover:underline">Login</Link>
              <Link
                href="/register"
                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-t border-teal-200 shadow-md md:hidden transition-all duration-200 overflow-hidden ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
        style={{ transitionProperty: 'max-height, padding' }}
      >
        <div className="flex flex-col items-center space-y-4">
          {user ? (
            <>
              <Link href="/tickets/new" className="text-gray-700 hover:underline" onClick={() => setIsOpen(false)}>New Ticket</Link>
              <Link href="/tickets" className="text-gray-700 hover:underline" onClick={() => setIsOpen(false)}>My Tickets</Link>
              <div className="flex justify-center"><LogoutButton /></div>
            </>
          ) : (
            <>
              <Link href="/login" className="text-teal-700 hover:underline" onClick={() => setIsOpen(false)}>Login</Link>
              <Link
                href="/register"
                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarClient;
