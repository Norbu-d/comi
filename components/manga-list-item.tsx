import Image from "next/image"
import Link from "next/link"

interface MangaListItemProps {
  manga: {
    id: number
    title: string
    image: string
    timeAgo: string
    chapters: number
  }
}

export default function MangaListItem({ manga }: MangaListItemProps) {
  return (
    <Link
      href={`/manga/${manga.id}`}
      className="flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-md transition-colors"
    >
      <div className="relative w-12 h-16 flex-shrink-0">
        <Image
          src={manga.image || "/placeholder.svg"}
          alt={manga.title}
          fill
          sizes="48px"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium line-clamp-1">{manga.title}</h3>
        <p className="text-xs text-gray-400">
          {manga.timeAgo}, {manga.chapters} {manga.chapters === 1 ? "chapter" : "chapters"}
        </p>
      </div>
    </Link>
  )
}

