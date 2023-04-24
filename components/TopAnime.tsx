import { animeStore } from "./../store/animeStore";
import { useEffect } from "react";

export default function TopAnime() {
  const { animeList, loading, fetchTopAnime } = animeStore();

  useEffect(() => {
    fetchTopAnime();
  }, []);

  return !loading ? (
    <div className="main m-auto">
      <div className="grid grid-flow-row gap-6 text-white p-3 m-3 bg-[#2D3148]">
        {animeList.slice(0, 10).map((anime) => (
          <div
            className="anime-card h-auto shadow-2xl text-center cursor-pointer max-w-[13rem] md:max-w-[13rem] transition-all duration-300 hover:bg-[#2D3148] rounded-lg"
            key={anime.id}
          >
            <img
              src={anime.image}
              alt={anime.title}
              className="h-4/5 w-full rounded-t-lg"
            />
            <h3 className="text-sm truncate px-3">{anime.title}</h3>
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
