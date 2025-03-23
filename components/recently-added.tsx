import { MoreHorizontal } from "lucide-react"
import MangaListItem from "@/components/manga-list-item"

const recentManga = [
  {
    id: 1,
    title: "XinMo",
    image: "https://meo.comick.pictures/oGqL2Z.jpg",
    timeAgo: "9 hours ago",
    chapters: 1,
  },
  {
    id: 2,
    title: "Shita no Kai ni Sundeiru Hikikomorimura no Fukai Tokoro ni, Tensei Shiteshimatta",
    image: "https://meo.comick.pictures/67YxpY.png",
    timeAgo: "9 hours ago",
    chapters: 1,
  },
  {
    id: 3,
    title: "Gosai de, Ryuu no Outei Denka no Konyakusha ni Natta node, Himawari Ouhi ni Narou to Omoimasu",
    image: "https://meo.comick.pictures/oGqL2Z.jpg",
    timeAgo: "14 hours ago",
    chapters: 2.1,
  },
  {
    id: 4,
    title: "I Became the Daughter of the Ghost King",
    image: "https://meo.comick.pictures/67YxpY.png",
    timeAgo: "16 hours ago",
    chapters: 15,
  },
  {
    id: 5,
    title: "Just a Cat",
    image: "https://meo.comick.pictures/Z8nL7j.jpg",
    timeAgo: "20 hours ago",
    chapters: 7,
  },
  {
    id: 6,
    title: "Kaigo Robo ni Isan Souzoku Saretara Jinsei Daidassou ga Hajimatta",
    image: "https://meo.comick.pictures/2NvvZJ.jpg",
    timeAgo: "20 hours ago",
    chapters: 1,
  },
]

export default function RecentlyAdded() {
  return (
    <div className="my-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-lg font-bold">Recently Added</h2>
          <span className="mx-2 text-gray-400">/</span>
          <button className="text-gray-400 hover:text-white text-sm">Complete Series</button>
        </div>
        <button className="p-1 text-gray-300 hover:text-white rounded hover:bg-gray-700">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-3">
        {recentManga.map((manga) => (
          <MangaListItem key={manga.id} manga={manga} />
        ))}
      </div>
    </div>
  )
}

