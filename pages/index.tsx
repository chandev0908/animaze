import Header from "../components/Header";
import RecentAnime from "@/components/RecentAnime";
import TopAnime from "@/components/TopAnime";
import { animeStore } from "./../store/animeStore";

export default function Home() {
  const { animeList, loading, fetchAnimeRecent } = animeStore();

  return (
    <main className="m-auto w-full max-w-[1300px]">
      <Header></Header>
      <div className="layout grid md:grid-cols-1fr-auto grid-cols-none grid-flow-row m-auto w-full justify-center content-start justify-items-center">
        <RecentAnime></RecentAnime>
        <TopAnime></TopAnime>
      </div>
    </main>
  );
}
