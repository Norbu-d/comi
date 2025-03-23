import Header from "@/components/header"
import JoinBanner from "@/components/join-banner"
import NotificationBar from "@/components/notification-bar"
import NewChapters from "@/components/new-chapters"
import PopularManga from "@/components/popular-manga"
import RecentlyAdded from "@/components/recently-added"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a202c] text-gray-100">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <JoinBanner />
        <NotificationBar />
        <NewChapters />
        <PopularManga />
        <RecentlyAdded />
      </div>
    </main>
  )
}

