// components/layout/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Link */}
        <Link href="/" className="text-2xl font-bold hover:opacity-80">
          PropertyMaco
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/how-it-works" className="hover:underline">
            How It Works
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link href="/testimonials" className="hover:underline">
            Testimonials
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
