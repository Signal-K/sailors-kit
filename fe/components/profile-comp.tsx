import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"

export function ProfileComp() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div>
          <div className="bg-gradient-to-br from-[#ff6b6b] to-[#ffa500] rounded-3xl p-6 md:p-8 flex flex-col items-center">
            <div className="bg-white rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <img
                alt="User Avatar"
                className="rounded-full"
                height={80}
                src="https://avatars.githubusercontent.com/u/31812229?v=4"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Arbuckle</h1>
            <p className="text-lg md:text-xl text-white/80 mb-6">Aerospace Designer & passionate open-source contributor</p>
            <div className="flex items-center gap-4">
              <Button className="text-white hover:bg-white/20" size="sm" variant="outline">
                <FilePenIcon className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
              <Button className="text-white hover:bg-white/20" size="sm" variant="outline">
                <SettingsIcon className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
          <div className="mt-8 md:mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">My Inventory</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-[#9b59b6] rounded-2xl p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2 shadow-lg">
                  <GemIcon className="w-6 h-6 text-[#9b59b6]" />
                </div>
                <p className="text-white font-medium">40 birds</p>
              </div>
              <div className="bg-[#3498db] rounded-2xl p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2 shadow-lg">
                  <SwordIcon className="w-6 h-6 text-[#3498db]" />
                </div>
                <p className="text-white font-medium">10 lakes</p>
              </div>
              <div className="bg-[#2ecc71] rounded-2xl p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2 shadow-lg">
                  <ShieldIcon className="w-6 h-6 text-[#2ecc71]" />
                </div>
                <p className="text-white font-medium">11 planets</p>
              </div>
              <div className="bg-[#e74c3c] rounded-2xl p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2 shadow-lg">
                  <PillBottleIcon className="w-6 h-6 text-[#e74c3c]" />
                </div>
                <p className="text-white font-medium">9 native animals</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Settings</h2>
          <div className="grid gap-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input defaultValue="lArbuckle" id="username" />
            </div>
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea defaultValue="Aerospace Designer & passionate open-source contributor" id="bio" />
            </div>
            <div>
              <Label htmlFor="avatar">Avatar</Label>
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  <img
                    alt="User Avatar"
                    className="rounded-full"
                    height={48}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "48/48",
                      objectFit: "cover",
                    }}
                    width={48}
                  />
                </div>
                <Button size="sm" variant="outline">
                  <UploadIcon className="w-4 h-4 mr-2" />
                  Change Avatar
                </Button>
              </div>
            </div>
            <div>
              <Label htmlFor="theme">Theme</Label>
              <RadioGroup defaultValue="light" id="theme">
                <div className="flex items-center gap-4">
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="theme-light">
                    <RadioGroupItem id="theme-light" value="light" />
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      <SunIcon className="w-5 h-5 text-yellow-500" />
                    </div>
                    <span>Light</span>
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="theme-dark">
                    <RadioGroupItem id="theme-dark" value="dark" />
                    <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      <MoonIcon className="w-5 h-5 text-white" />
                    </div>
                    <span>Dark</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <Button className="w-full" size="lg">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FilePenIcon(props: any) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function GemIcon(props: any) {
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
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  )
}


function MoonIcon(props: any) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function PillBottleIcon(props: any) {
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
      <path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" />
      <path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
      <rect width="16" height="5" x="4" y="2" rx="1" />
    </svg>
  )
}


function SettingsIcon(props: any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShieldIcon(props: any) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function SunIcon(props: any) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function SwordIcon(props: any) {
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
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <line x1="13" x2="19" y1="19" y2="13" />
      <line x1="16" x2="20" y1="16" y2="20" />
      <line x1="19" x2="21" y1="21" y2="19" />
    </svg>
  )
}


function UploadIcon(props: any) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}
