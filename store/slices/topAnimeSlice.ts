import { StateCreator } from "zustand";
import { TopAnimeTypes } from "../types/topAnimeTypes";
import axios from "axios";

const createTopAninmeSlice: StateCreator<TopAnimeTypes> = (set) => ({
  topAnimeList: [],
  topAnimeLoading: false,
  fetchTopAnime: async () => {
    set({ topAnimeLoading: true });
    try {
      const topAnimeResponse = await axios.get(
        "https://api.jikan.moe/v4/top/anime?filter=airing"
      );
      const topData = topAnimeResponse.data.data;
      console.log(topData);
      set({ topAnimeList: topData, topAnimeLoading: false });
    } catch (error) {
      console.error(error);
      set({ topAnimeLoading: false });
    }
  },
});
export default createTopAninmeSlice;
