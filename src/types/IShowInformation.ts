import IEpisodeGroup from "./IEpisodeGroup";
export default interface IShowInformation {
  banner: string;
  id: string;
  title: string;
  poster: string;
  summary: string;
  episodeGroups: IEpisodeGroup[];
  year: string;
}
