import IEpisodeGroup from "./IEpisodeGroup";
export default interface IShowInformation {
  id: string;
  title: string;
  poster: string;
  summary: string;
  episodeGroups: IEpisodeGroup[];
  year: string;
}
