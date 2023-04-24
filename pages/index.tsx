import Header from "../components/Header";
import RecentAnime from "@/components/RecentAnime";
import TopAnime from "@/components/TopAnime";
import { animeStore } from "./../store/animeStore";

export default function Home() {
  const { animeList, loading, fetchAnimeRecent } = animeStore();

  return (
    <main className="mx-auto">
      <Header></Header>
      <div className="layout grid md:grid-cols-1fr-auto m-auto w-full justify-center">
        <RecentAnime></RecentAnime>
        <TopAnime></TopAnime>
      </div>
    </main>
  );
}
