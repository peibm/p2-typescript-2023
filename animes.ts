export class Anime {
  constructor(
    public rank: number,
    public titles: Titles[],
    public images: Images,
    public score: number,
    public synopsis: string,
    public year: number,
    public episodes: number,
    public airing: boolean,
    public status: Status,
    public broadcast: Broadcast,
    public trailer: YoutubeVideo
  ) {}
}

export enum Status {
  finished = "Finished Airing",
  airing = "Currently Airing",
  complete = "Complete",
  upcoming = "Not yet aired",
}

export interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface YoutubeVideo {
  youtube_id: string;
  url: string;
  embed_url: string;
}

export interface Titles {
  type: string;
  title: string;
}

export interface Images {
  jpg: ImagesCollection;
  webp?: ImagesCollection;
}

export interface ImagesCollection {
  image_url: string;
  small_image_url?: string;
  medium_image_url?: string;
  large_image_url?: string;
  maximum_image_url?: string;
}

const q = {
  type: `tv`,
  filter: `bypopularity`,
  page: 1,
  limit: 1,
};

export const getTopAnimes = async () => {
  const url = `https://api.jikan.moe/v4/top/anime?q=${q.type}/${q.filter}/${q.page}/${q.limit}`;
  const response = await fetch(url);
  const { data } = (await response.json()) as { data: any[] };
  let animes: Array<Anime> = [];
  for (const {
    rank,
    titles,
    images,
    score,
    synopis,
    year,
    episodes,
    airing,
    status,
    broadcast,
    trailer,
  } of data) {
    animes.push(
      new Anime(
        rank,
        titles,
        images,
        score,
        synopis,
        year,
        episodes,
        airing,
        status,
        broadcast,
        trailer
      )
    );
  }
};
