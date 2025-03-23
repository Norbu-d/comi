import Image from "next/image"
import Link from "next/link"

interface MangaCardProps {
  manga: {
    id: number
    title: string
    image: string
  }
}

export default function MangaCard({ manga }: MangaCardProps) {
  return (
    <div className="relative group">
      <div className="absolute top-0 left-0 w-7 h-7 bg-red-500 flex items-center justify-center text-white font-bold z-10 text-sm">
        {manga.id}
      </div>
      <Link href={`/manga/${manga.id}`} className="block">
        <div className="relative aspect-[2/3] overflow-hidden rounded-md">
          <Image
            src={manga.image || "/placeholder.svg"}
            alt={manga.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="mt-2 text-sm font-medium line-clamp-2 text-gray-200">{manga.title}</h3>
      </Link>
    </div>
  )
}

