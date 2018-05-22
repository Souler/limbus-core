import IEpisodeInformation from "./IEpisodeInformation";
import ISearchableShow from "./ISearchableShow";
import IShowInformation from "./IShowInformation";
import IFeaturedShowSection from "./IFeaturedShowSection";
import IVideoResource from "./IVideoResource";

export default interface IContentProvider {
  name: string;
  getHightlightShow(): Promise<ISearchableShow | null>;
  getFeatured(): Promise<IFeaturedShowSection[]>;
  search(term: string): Promise<ISearchableShow[]>;
  getShowById(id: string): Promise<IShowInformation>;
  getShowEpisodes(showId: string, episodeGroupId: string): Promise<IEpisodeInformation[]>;
  getEpisodeVideoResources(showId: string, episodeId: string): Promise<IVideoResource[]>;
}