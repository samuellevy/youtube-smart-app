export interface IVideo {
  id: string;
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnail: {
    default: {url:string},
    medium: {url: string;}
    high: {url:string}
  };
  channelTitle: string;
  viewCount: number;
}
