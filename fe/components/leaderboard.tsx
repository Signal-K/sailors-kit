import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export function Leaderboard() {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="flex items-center justify-between px-6 py-4">
        <CardTitle>Leaderboard</CardTitle>
        <div className="flex items-center gap-2">
          <TrophyIcon className="h-5 w-5 text-yellow-500" />
          <span className="text-sm font-medium">Top Classifiers</span>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-center gap-4 rounded-lg -100 p-4 dark:-800">
            <Avatar className="h-12 w-12 border-2 border-white dark:border-gray-950">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="text-sm font-medium">Jared Palmer</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">2,345 items classified</div>
            </div>
            <div className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">#1</div>
          </div>
          <div className="flex items-center gap-4 rounded-lg -100 p-4 dark:-800">
            <Avatar className="h-12 w-12 border-2 border-white dark:border-gray-950">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="text-sm font-medium">Sarah Johnson</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">1,987 items classified</div>
            </div>
            <div className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">#2</div>
          </div>
          <div className="flex items-center gap-4 rounded-lg -100 p-4 dark:-800">
            <Avatar className="h-12 w-12 border-2 border-white dark:border-gray-950">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="text-sm font-medium">Alex Chen</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">1,654 items classified</div>
            </div>
            <div className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">#3</div>
          </div>
          <div className="flex items-center gap-4 rounded-lg -100 p-4 dark:-800">
            <Avatar className="h-12 w-12 border-2 border-white dark:border-gray-950">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="text-sm font-medium">Emily Park</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">1,432 items classified</div>
            </div>
            <div className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">#4</div>
          </div>
          <div className="flex items-center gap-4 rounded-lg -100 p-4 dark:-800">
            <Avatar className="h-12 w-12 border-2 border-white dark:border-gray-950">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="text-sm font-medium">Michael Lee</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">1,298 items classified</div>
            </div>
            <div className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">#5</div>
          </div>
          <div className="flex items-center gap-4 rounded-lg -100 p-4 dark:-800">
            <Avatar className="h-12 w-12 border-2 border-white dark:border-gray-950">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="text-sm font-medium">Sophia Nguyen</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">1,154 items classified</div>
            </div>
            <div className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">#6</div>
          </div>
          <div className="flex items-center gap-4 rounded-lg -100 p-4 dark:-800">
            <Avatar className="h-12 w-12 border-2 border-white dark:border-gray-950">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="text-sm font-medium">David Kim</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">1,032 items classified</div>
            </div>
            <div className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">#7</div>
          </div>
          <div className="flex items-center gap-4 rounded-lg -100 p-4 dark:-800">
            <Avatar className="h-12 w-12 border-2 border-white dark:border-gray-950">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="text-sm font-medium">Isabella Rossi</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">987 items classified</div>
            </div>
            <div className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">#8</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function TrophyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}
