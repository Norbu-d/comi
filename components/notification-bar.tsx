import { Info, X } from "lucide-react"

export default function NotificationBar() {
  return (
    <div className="bg-blue-900/80 text-white rounded-md my-2 relative">
      <div className="flex items-center p-3">
        <Info className="h-5 w-5 mr-2 flex-shrink-0 text-blue-200" />
        <span>Click here to show English comics only.</span>
        <button className="absolute right-1 top-1 p-1 text-white hover:bg-blue-800 rounded-full">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

