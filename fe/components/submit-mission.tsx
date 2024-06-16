import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";

export function SubmitMission() {
  const supabase = useSupabaseClient();
  const session = useSession();

  const [formData, setFormData] = useState({
    missiontitle: "",
    mission: "",
    aim: "",
    samples: "",
    configuration: "",
    totalbounty: "",
    tags: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const { missiontitle, mission, aim, samples, configuration, totalbounty, tags } = formData;

    let samplesJson = [];
    let configurationJson = {};

    try {
      samplesJson = samples ? JSON.parse(samples) : [];
      configurationJson = configuration ? JSON.parse(configuration) : {};
    } catch (err) {
      console.error("JSON parse error:", err);
      return;
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim());



    console.log("Submitting mission:", {
      missiontitle,
      mission,
      aim,
      samples: samplesJson,
      configuration: configurationJson,
      totalbounty: parseInt(totalbounty),
      tags: tagsArray,
    });

    const { data, error } = await supabase
      .from("missions")
      .insert([
        {
          missiontitle,
          mission,
          aim,
          samples: samplesJson,
          configuration: configurationJson,
          totalbounty: parseInt(totalbounty),
          tags: tagsArray,
        },
      ]);

    if (error) {
      console.error("Supabase error:", error);
    } else {
      setFormData({
        missiontitle: "",
        mission: "",
        aim: "",
        samples: "",
        configuration: "",
        totalbounty: "",
        tags: "",
      });
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 md:p-10 -100 rounded-2xl shadow-lg animate-fade-in dark:-800">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 animate-fade-in-up">
        Create a New Mission
      </h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
      <form className="grid gap-6 animate-fade-in-up" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label className="text-gray-700 dark:text-gray-300" htmlFor="missiontitle">
            Mission Title
          </Label>
          <Input
            className="bg-white dark:-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            id="missiontitle"
            placeholder="Enter mission title"
            type="text"
            value={formData.missiontitle}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-700 dark:text-gray-300" htmlFor="mission">
            Mission Description
          </Label>
          <Textarea
            className="bg-white dark:-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            id="mission"
            placeholder="Describe the mission"
            rows={4}
            value={formData.mission}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-700 dark:text-gray-300" htmlFor="aim">
            Aim
          </Label>
          <Textarea
            className="bg-white dark:-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            id="aim"
            placeholder="Explain the mission's aim"
            rows={4}
            value={formData.aim}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-700 dark:text-gray-300" htmlFor="samples">
            Samples (JSON format)
          </Label>
          <Textarea
            className="bg-white dark:-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            id="samples"
            placeholder='Enter samples in JSON format, e.g., ["sample1", "sample2"]'
            rows={4}
            value={formData.samples}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-700 dark:text-gray-300" htmlFor="config">
            Configuration (JSON format)
          </Label>
          <Textarea
            className="bg-white dark:-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            id="config"
            placeholder='Enter JSON configuration, e.g., {"key": "value"}'
            rows={4}
            value={formData.configuration}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-700 dark:text-gray-300" htmlFor="totalbounty">
            Total Bounty
          </Label>
          <Input
            className="bg-white dark:-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            id="totalbounty"
            placeholder="Enter bounty amount"
            type="number"
            value={formData.totalbounty}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-700 dark:text-gray-300" htmlFor="tags">
            Tags (comma separated)
          </Label>
          <Input
            className="bg-white dark:-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            id="tags"
            placeholder="Enter tags separated by commas"
            type="text"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end">
          <Button
            className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300"
            type="submit"
          >
            Submit Mission
          </Button>
        </div>
      </form>
    </div>
  );
}
