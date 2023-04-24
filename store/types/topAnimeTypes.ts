interface TopAnimeResponse {
  currentPage: number;
  hasNextPage: boolean;
  results: TopAnimeResults[];
}
interface TopAnimeResults {
  id: string;
  title: string;
  image: string;
  url: string;
  genres: string[];
}
export interface TopAnimeTypes {
  topAnimeList: TopAnimeResults[];
  loading: boolean;
  fetchTopAnime: () => Promise<void>;
}
