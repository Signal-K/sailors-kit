import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Leaderboard } from "./leaderboard";

interface Mission {
  id: number;
  missiontitle: string;
}

export function MissionList() {
  const supabase = useSupabaseClient();
  const [missions, setMissions] = useState<Mission[]>([]); // Explicit Mission[] type
  const [loading, setLoading] = useState<boolean>(true); // Explicit boolean type
  const [error, setError] = useState<string | null>(null); // Explicit string | null type

  useEffect(() => {
    async function fetchMissions() {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("missions").select("*").limit(4);
        if (error) {
          throw error;
        }
        setMissions(data);
      } catch (error) {
        return;
      } finally {
        setLoading(false);
      }
    }

    fetchMissions();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading missions...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">{error}</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Missions Near You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {missions.map((mission: Mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recently Completed Missions</h2>
        <div className="space-y-4">
          <CompletedMissionCard title="Collect 10 photos of birds" completedTime="2 hours ago" />
          <CompletedMissionCard title="Catalogue pollution sources in your city" completedTime="1 day ago" />
          <CompletedMissionCard title="Tag & Classify image data for AI model" completedTime="3 days ago" />
        </div>
      </div>
      <Leaderboard />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Search Missions</h2>
        <div className="flex items-center mb-4">
          <Input className="flex-1 mr-4" placeholder="Search missions..." />
          <Select>
            <option value="">All Tags</option>
            <option value="nature">Nature</option>
            <option value="combat">Combat</option>
            <option value="exploration">Exploration</option>
          </Select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <MissionCardPlaceholder title="Track Rainbow Lorikeets" />
          <MissionCardPlaceholder title="Vote for our project to win!" />
        </div>
      </div>
    </div>
  );
}

interface MissionCardProps {
  mission: Mission;
}

function MissionCard({ mission }: MissionCardProps) {
  return (
    <Card className="bg-white dark:-800 rounded-lg overflow-hidden shadow-md">
      <img
        alt="Mission Image"
        className="w-full h-48 object-cover"
        src="/placeholder.svg"
        style={{ aspectRatio: "300/200", objectFit: "cover" }}
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{mission.missiontitle}</h3>
        <Button className="w-full">Start Mission</Button>
      </CardContent>
    </Card>
  );
}

interface CompletedMissionCardProps {
  title: string;
  completedTime: string;
}

function CompletedMissionCard({ title, completedTime }: CompletedMissionCardProps) {
  return (
    <div className="flex items-center justify-between bg-white dark:-800 rounded-lg px-4 py-3 shadow-md">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Completed {completedTime}</p>
      </div>
      <CircleCheckIcon className="w-6 h-6 text-green-500" />
    </div>
  );
}

interface MissionCardPlaceholderProps {
  title: string;
}

function MissionCardPlaceholder({ title }: MissionCardPlaceholderProps) {
  return (
    <Card className="bg-white dark:-800 rounded-lg overflow-hidden shadow-md">
      <img
        alt="Mission Image"
        className="w-full h-48 object-cover"
        src="/placeholder.svg"
        style={{ aspectRatio: "300/200", objectFit: "cover" }}
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <Button className="w-full">Start Mission</Button>
      </CardContent>
    </Card>
  );
}

function CircleCheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
