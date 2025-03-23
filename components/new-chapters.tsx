import Link from "next/link"
import { List, LayoutGrid } from "lucide-react"

export default function NewChapters() {
  return (
    <div className="my-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">New Chapters from Followed Comics</h2>
        <div className="flex items-center space-x-2">
          <button className="p-1 text-gray-300 hover:text-white rounded hover:bg-gray-700">
            <List className="h-5 w-5" />
          </button>
          <button className="p-1 text-gray-300 hover:text-white rounded bg-gray-700">
            <LayoutGrid className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-2 ml-4">
            <span className="text-sm">Apps</span>
            <span className="px-2 py-0.5 bg-gray-700 rounded text-xs">PWA</span>
            <span className="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.6 9.45c-.53-.1-1.07-.15-1.6-.15a8.5 8.5 0 0 0-8.5 8.5c0 .53.05 1.07.15 1.6" />
                <path d="M12 19.5a7 7 0 0 0 7-7c0-.97-.2-1.88-.55-2.7" />
                <path d="M4.56 10.5a7.5 7.5 0 0 0 .19 10.94" />
                <path d="M14 8.5a6.5 6.5 0 0 0-10.44 1.06" />
                <path d="M8.5 4a7 7 0 0 1 10.95 8.45" />
                <path d="M19.44 13.5a7.5 7.5 0 0 1-7.94 7.94" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <p className="text-base">
          We have <span className="font-bold">292</span> new comics and <span className="font-bold">10466</span> new
          chapters this week.
        </p>
        <p className="mt-2 text-sm">
          <Link href="#" className="text-blue-400 hover:underline">
            Join Comick
          </Link>
          , to read and discuss about manga.
        </p>
        <p className="mt-4 flex items-center justify-center text-sm">
          <span>You can also filter comics by your gender</span>
          <span className="mx-1 bg-yellow-500 rounded-full p-0.5 text-xs">👦</span>
          <span className="mx-1 bg-pink-500 rounded-full p-0.5 text-xs">👧</span>
          <span>or genres</span>
          <span className="mx-1 bg-blue-500 rounded-full p-0.5 text-xs">🎭</span>
          <span className="mx-1 bg-red-500 rounded-full p-0.5 text-xs">🎭</span>
        </p>
      </div>
    </div>
  )
}

