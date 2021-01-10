export interface IVideoEntityReq {
  id: string,
  snippet: IVideoSnippet,
  statistics: {
    viewCount: number;
  }
}

interface IVideoSnippet {
  publishedAt: string;
  channelId: string;
  channelTitle: string;
  title: string;
  description: string;
  thumbnails: IVideoThumbnail;
}

interface IVideoThumbnail {
  high: {
    url: string;
  }
}
