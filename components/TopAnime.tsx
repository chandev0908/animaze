import { animeStore } from "./../store/animeStore";
import { useEffect } from "react";

export default function TopAnime() {
  const { topAnimeList, topAnimeLoading, fetchTopAnime } = animeStore();

  useEffect(() => {
    fetchTopAnime();
  }, []);

  return !topAnimeLoading ? (
    <div className="main w-11/12 md:max-w-[450px]">
      <div className="w-fit grid grid-flow-row gap-2 text-white px-2 pb-6 bg-[#2D3148] md:rounded-md">
        <h1 className="text-lg font-normal p-2">Top Anime</h1>
        {topAnimeList.slice(0, 5).map((anime, index) => (
          <div
            className="anime-card w-full shadow-2xl text-center cursor-pointer transition-all duration-300 hover:bg-[#2D3148] rounded-lg relative"
            key={anime.mal_id}
          >
            <img
              src={anime.trailer.images.maximum_image_url}
              alt={anime.title}
              className="w-fit relative z-20"
            />
            <div className="z-50 filter absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-40 hover:opacity-0"></div>
            <h1 className="text-left absolute bottom-6 left-0 z-50 text-base font-medium"><span className="p-6 mr-1 bg-gray-55">{index+1}</span>{anime.title.slice(0,29)}</h1>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="grid justify-start items-start h-5/6 z-50">
      <svg className="inline-block animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-500"></svg>
    </div>
  );
}