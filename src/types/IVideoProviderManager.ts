import IVideoProvider from "./IVideoProvider";
export default interface IVideoProviderManager {
  registerProvider(provider: IVideoProvider): Promise<void>
}