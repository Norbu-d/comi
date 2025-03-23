import Link from "next/link"
import Image from "next/image"
import { Search, ChevronDown, Bell, Languages, User, ChevronRight } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-[#1a202c] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 mr-2 relative">
                <Image src="/placeholder.svg?height=32&width=32" alt="ComicK Logo" width={32} height={32} />
              </div>
              <span className="text-xl font-bold">ComicK</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-16 py-1.5 border border-gray-700 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-xs text-gray-500">Ctrl K</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="flex items-center text-gray-300 hover:text-white text-sm">
                Categories
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>

            <button className="text-gray-300 hover:text-white text-sm">Search</button>

            <button className="text-gray-300 hover:text-white text-sm">My List</button>

            <button className="p-1 text-gray-300 hover:text-white rounded-full hover:bg-gray-700">
              <Bell className="h-5 w-5" />
            </button>

            <button className="p-1 text-gray-300 hover:text-white rounded-full hover:bg-gray-700">
              <Languages className="h-5 w-5" />
            </button>

            <button className="p-1 text-gray-300 hover:text-white rounded-full hover:bg-gray-700">
              <User className="h-5 w-5" />
            </button>

            <button className="p-1 text-gray-300 hover:text-white rounded-full hover:bg-gray-700">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

