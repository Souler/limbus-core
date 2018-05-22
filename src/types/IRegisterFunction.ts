import IContentProvider from "./IContentProvider";
import IVideoProvider from "./IVideoProvider";

export interface IRegisterFunctionResult {
  name: string;
  description: string;
  contentProviders: IContentProvider[];
  videoProviders: IVideoProvider[];
}

export default interface IRegisterFunction {
  (): Promise<IRegisterFunctionResult>;
}
