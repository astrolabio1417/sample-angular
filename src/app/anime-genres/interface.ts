export interface IGenre {
  mal_id: 0;
  name: string;
  url: string;
  count: 0;
}

export interface IGenres {
  data: IGenre[];
}

export interface IAnilist {
  data: {
    mal_id: 0;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    };
    trailer: {
      youtube_id: string;
      url: string;
      embed_url: string;
    };
    approved: true;
    titles: [
      {
        type: string;
        title: string;
      }
    ];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: 0;
    status: string;
    airing: true;
    aired: {
      from: string;
      to: string;
      prop: {
        from: {
          day: 0;
          month: 0;
          year: 0;
        };
        to: {
          day: 0;
          month: 0;
          year: 0;
        };
        string: string;
      };
    };
    duration: string;
    rating: string;
    score: 0;
    scored_by: 0;
    rank: 0;
    popularity: 0;
    members: 0;
    favorites: 0;
    synopsis: string;
    background: string;
    season: string;
    year: 0;
    broadcast: {
      day: string;
      time: string;
      timezone: string;
      string: string;
    };
    producers: [
      {
        mal_id: 0;
        type: string;
        name: string;
        url: string;
      }
    ];
    licensors: [
      {
        mal_id: 0;
        type: string;
        name: string;
        url: string;
      }
    ];
    studios: [
      {
        mal_id: 0;
        type: string;
        name: string;
        url: string;
      }
    ];
    genres: [
      {
        mal_id: 0;
        type: string;
        name: string;
        url: string;
      }
    ];
    explicit_genres: [
      {
        mal_id: 0;
        type: string;
        name: string;
        url: string;
      }
    ];
    themes: [
      {
        mal_id: 0;
        type: string;
        name: string;
        url: string;
      }
    ];
    demographics: [
      {
        mal_id: 0;
        type: string;
        name: string;
        url: string;
      }
    ];
  }[];
  pagination: {
    last_visible_page: 0;
    has_next_page: true;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
}
