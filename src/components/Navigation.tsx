import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="w-full px-4 py-2 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white">
        <div className="flex items-center space-x-8 bg-white">
          {/* Logo */}
          <Link href="/" className="flex items-center bg-white">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Image
                src="/rocket-white.png"
                alt="Logo"
                width={24}
                height={24}
                className="text-white"
              />
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 bg-white">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/my-tests" className="text-gray-600 hover:text-gray-900">My Tests</Link>
            <Link href="/my-sessions" className="text-gray-600 hover:text-gray-900">My Sessions</Link>
            <Link href="/career-library" className="text-gray-600 hover:text-gray-900">Career Library</Link>
            <Link href="/your-report" className="text-gray-600 hover:text-gray-900">Your Report</Link>
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4 bg-white">
          <button className="p-2 bg-white">
            <Image
              src="/bell.png"
              alt="Notifications"
              width={20}
              height={20}
            />
          </button>
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <Image
              src="/user.png"
              alt="Profile"
              width={24}
              height={24}
              className="rounded-full"
            />
          </button>
        </div>
      </div>
    </nav>
  );
} 