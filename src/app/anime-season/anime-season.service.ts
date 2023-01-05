import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnimeSeasonService {
  constructor(private http: HttpClient) {}

  getSeasons() {
    return this.http.get<IAnimeSeasons>('https://api.jikan.moe/v4/seasons/', {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        'content-type': 'application/json',
        referer: 'test',
      },
    });
  }

  getSeason(year: number, season: ISeasons) {
    return this.http.get<any>(
      `https://api.jikan.moe/v4/seasons/${year}/${season}`
    );
  }
}

export interface IAnimeSeasons {
  data: {
    year: number;
    seasons: 'string'[];
  }[];
}

export interface IAnimeSeason {
  data: [
    {
      mal_id: 0;
      url: 'string';
      images: {
        jpg: {
          image_url: 'string';
          small_image_url: 'string';
          large_image_url: 'string';
        };
        webp: {
          image_url: 'string';
          small_image_url: 'string';
          large_image_url: 'string';
        };
      };
      trailer: {
        youtube_id: 'string';
        url: 'string';
        embed_url: 'string';
      };
      approved: true;
      titles: [
        {
          type: 'string';
          title: 'string';
        }
      ];
      title: 'string';
      title_english: 'string';
      title_japanese: 'string';
      title_synonyms: ['string'];
      type: 'TV';
      source: 'string';
      episodes: 0;
      status: 'Finished Airing';
      airing: true;
      aired: {
        from: 'string';
        to: 'string';
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
          string: 'string';
        };
      };
      duration: 'string';
      rating: 'G - All Ages';
      score: 0;
      scored_by: 0;
      rank: 0;
      popularity: 0;
      members: 0;
      favorites: 0;
      synopsis: 'string';
      background: 'string';
      season: 'summer';
      year: 0;
      broadcast: {
        day: 'string';
        time: 'string';
        timezone: 'string';
        string: 'string';
      };
      producers: [
        {
          mal_id: 0;
          type: 'string';
          name: 'string';
          url: 'string';
        }
      ];
      licensors: [
        {
          mal_id: 0;
          type: 'string';
          name: 'string';
          url: 'string';
        }
      ];
      studios: [
        {
          mal_id: 0;
          type: 'string';
          name: 'string';
          url: 'string';
        }
      ];
      genres: [
        {
          mal_id: 0;
          type: 'string';
          name: 'string';
          url: 'string';
        }
      ];
      explicit_genres: [
        {
          mal_id: 0;
          type: 'string';
          name: 'string';
          url: 'string';
        }
      ];
      themes: [
        {
          mal_id: 0;
          type: 'string';
          name: 'string';
          url: 'string';
        }
      ];
      demographics: [
        {
          mal_id: 0;
          type: 'string';
          name: 'string';
          url: 'string';
        }
      ];
    }
  ];
  pagination: {
    last_visible_page: 0;
    has_next_page: true;
    items: {
      count: 0;
      total: 0;
      per_page: 0;
    };
  };
}

export type ISeasons = 'winter' | 'spring' | 'summer' | 'fall';
