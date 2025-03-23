import Link from "next/link"

export default function JoinBanner() {
  return (
    <div className="py-2 text-center text-sm text-gray-300">
      Join{" "}
      <Link href="#" className="text-blue-400 hover:underline">
        /r/comick
      </Link>{" "}
      or{" "}
      <Link href="#" className="text-blue-400 hover:underline">
        Discord
      </Link>{" "}
      for support and discussion.
    </div>
  )
}

