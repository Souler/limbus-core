export default interface IVideoProvider {
  canHandleUrl(url: string): boolean;
  getVideoUrl(url: string): Promise<string>;
}
