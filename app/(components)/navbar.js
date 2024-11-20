import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg py-4 z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo/Title (optional) */}
        <div className="text-white font-bold text-2xl">
          <Link href="/">🎉 Happy Birthday Putta </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className="text-white text-lg hover:text-purple-200 transition duration-300">Home</Link>
          <Link href="/gallery" className="text-white text-lg hover:text-purple-200 transition duration-300">Gallery</Link>
          <Link href="/videos" className="text-white text-lg hover:text-purple-200 transition duration-300">Videos</Link>
          <Link href="/wishes" className="text-white text-lg hover:text-purple-200 transition duration-300">Wishes</Link>
        </div>
      </div>
    </nav>
  );
}
