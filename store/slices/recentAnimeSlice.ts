import { AnimeResponseData, AnimeTypes } from "../types/recentAnimeTypes";

import { StateCreator } from "zustand";
import axios from "axios";

const createRecentAnimeSlice: StateCreator<AnimeTypes> = (set) => ({
  animeList: [],
  loading: false,
  fetchAnimeRecent: async () => {
    set({ loading: true });
    try {
      const response = await axios.get<AnimeResponseData>(
        "https://api.consumet.org/anime/gogoanime/recent-episodes"
      );
      const data: AnimeResponseData = response.data;
      set({ animeList: data.results, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
});

export default createRecentAnimeSlice;