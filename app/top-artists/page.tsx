import SpotifyWebApi from "spotify-web-api-node";
import { redirect } from "next/navigation";
import TimeRangeSelection from "@/components/ui/time-range-selection";
import TopArtists, {
  LoadingTopArtists,
} from "@/components/scenes/top-artists/top-artists";
import { Suspense } from "react";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  if (session?.user && session?.accessToken) {
    const spotifyApi = new SpotifyWebApi({
      accessToken: session.accessToken,
    });
    return (
      <main className="w-full max-w-3xl p-6 pb-2 flex flex-col">
        <TimeRangeSelection />
        <Suspense fallback={<LoadingTopArtists />}>
          <TopArtists spotifyApi={spotifyApi} />
        </Suspense>
      </main>
    );
  } else redirect("/");
}
