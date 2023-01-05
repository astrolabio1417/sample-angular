import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnilist } from '../interface';

@Injectable({ providedIn: 'root' })
export class AnimeGenreService {
  constructor(private http: HttpClient) {}

  getGenreList(genre: string, page: string = '1') {
    const url = new URL('https://api.jikan.moe/v4/anime');
    url.searchParams.append('genres', genre);
    url.searchParams.append('page', page);
    return this.http.get<IAnilist>(url.toString());
  }
}
