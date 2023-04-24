import { AnimeTypes } from "./types/recentAnimeTypes";
import { TopAnimeTypes } from "./types/topAnimeTypes";
import { create } from "zustand";
import createRecentAnimeSlice from "./slices/recentAnimeSlice";
import createTopAnimeSlice from "./slices/topAnimeSlice";

interface CombinedState extends AnimeTypes, TopAnimeTypes {}
const useAnimeStore = create<CombinedState>()((...a) => ({
  ...createRecentAnimeSlice(...a),
  ...createTopAnimeSlice(...a),
}));

export const animeStore = useAnimeStore;
