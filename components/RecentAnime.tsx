import { animeStore } from "./../store/animeStore";
import { useEffect } from "react";

export default function RecentAnime() {
  const { animeList, loading, fetchAnimeRecent } = animeStore();

  useEffect(() => {
    fetchAnimeRecent();
  }, []);

  return !loading ? (
    <div className="main mx-auto">
      <h1 className="px-7 py-2 text-lg text-white">Recently Updated:</h1>
      <div className="h-auto grid grid-cols-2 grid-flow-row gap-6 text-white p-7 sm:grid-cols-3 md:grid-cols-4">
        {animeList.slice(0, 20).map((anime) => (
          <div
            className="anime-card relative h-auto shadow-2xl text-center cursor-pointer max-w-[13rem] md:max-h-[22.5rem] md:max-w-[calc(16.66% - 14px)] transition-all duration-500 hover:bg-[#2D3148] rounded-lg hover:before:block hover:before:w-full hover:before:h-4/5 hover:before:bg-zinc-700 hover:before:opacity-70 hover:before:absolute before:m-auto"
            key={anime.id}
          >
            <img
              src={anime.image}
              alt={anime.title}
              className="h-4/5 w-full rounded-t-lg"
            />
            <h3 className="text-xs md:text-sm truncate px-3 h-1/5 grid content-center">
              {anime.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="grid place-content-center h-5/6 z-50">
      <svg className="inline-block animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-500"></svg>
    </div>
  );
}
