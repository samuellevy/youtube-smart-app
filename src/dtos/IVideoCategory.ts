import { IVideo } from './IVideo';

export interface IVideoCategory {
  id: string;
  title: string;
  videos: IVideo[];
}
