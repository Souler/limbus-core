import IContentProvider from "./IContentProvider";
export default interface IContentProviderManager {
  name: string;
  registerProvider(provider: IContentProvider): Promise<void>;
  getProviders(): Promise<IContentProvider[]>;
  getDefaultProvider(): Promise<IContentProvider>;
  setDefaultProvider(provider: IContentProvider): Promise<void>;
}