import { StateCreator } from "zustand";
import { TopAnimeTypes } from "../types/topAnimeTypes";
import axios from "axios";

const createTopAninmeSlice: StateCreator<TopAnimeTypes> = (set) => ({
  topAnimeList: [],
  loading: false,
  fetchTopAnime: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(
        "https://api.consumet.org/anime/gogoanime/top-airing"
      );
      const data = response.data;
      const response2 = await axios.get(`https://api.jikan.moe/v4/anime?q=${data.title}`)
      
      set({ topAnimeList: data.results, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
});
export default createTopAninmeSlice;