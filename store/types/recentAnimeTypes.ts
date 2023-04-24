interface AnimeState {
  id: string;
  episodeId: string;
  episodeNumber: number;
  title: string;
  image: string;
  url: string;
}

export interface AnimeResponseData {
  currentPage: number;
  hasNextPage: boolean;
  results: AnimeState[];
}

export interface AnimeTypes {
  animeList: AnimeState[];
  loading: boolean;
  fetchAnimeRecent: () => Promise<void>;
}
