'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, School } from 'lucide-react';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Student Life', href: '/student-life' },
  { name: 'News', href: '/news' },
  { name: 'Staff', href: '/staff' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-primary p-2 rounded-lg">
              <School className="h-8 w-8 text-white" />
            </div>
            <div>
              <span className="font-heading text-xl font-bold text-primary block">
                Scales Adventist
              </span>
              <span className="font-heading text-xs text-gray-500">
                Preparatory School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary font-medium transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/portal/login"
              className="btn btn-primary text-sm py-2"
            >
              Parent Portal
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/portal/login"
                className="btn btn-primary text-center mt-2"
              >
                Parent Portal
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
