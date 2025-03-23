import { MoreHorizontal } from "lucide-react"
import MangaCard from "@/components/manga-card"

const popularManga = [
  {
    id: 1,
    title: "I Will Raise This Family Well",
    image: "https://meo.comick.pictures/2NvvZJ.jpg",
  },
  {
    id: 2,
    title: "The Illegitimate Who Doesn't Want to Be Emperor",
    image: "https://meo.comick.pictures/67YxpY.png",
  },
  {
    id: 3,
    title: "The Villain Wants to Live",
    image: "https://meo.comick.pictures/67YxpY.png",
  },
  {
    id: 4,
    title: "Fated to Be Loved by You",
    image: "https://meo.comick.pictures/oGqL2Z.jpg",
  },
  {
    id: 5,
    title: "Villains Are Destined to Die",
    image: "https://meo.comick.pictures/oGqL2Z.jpg",
  },
  {
    id: 6,
    title: "The Return of the Corporation",
    image: "https://meo.comick.pictures/oGqL2Z.jpg",
  },
  {
    id: 7,
    title: "The Legendary Moonlight Sculptor",
    image: "https://meo.comick.pictures/67YxpY.png",
  },
]

export default function PopularManga() {
  return (
    <div className="my-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Most Recent Popular</h2>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded">7d</button>
          <button className="px-3 py-1 text-sm hover:bg-gray-700 rounded">1m</button>
          <button className="px-3 py-1 text-sm hover:bg-gray-700 rounded">3m</button>
          <button className="p-1 text-gray-300 hover:text-white rounded hover:bg-gray-700">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {popularManga.map((manga) => (
          <MangaCard key={manga.id} manga={manga} />
        ))}
      </div>
    </div>
  )
}

