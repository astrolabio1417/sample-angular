import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnimeInfo } from './interface';

@Injectable({ providedIn: 'root' })
export class AnimeInfoService {
  constructor(private http: HttpClient) {}

  getAnimeInfo(id: string) {
    const url = new URL(`https://api.jikan.moe/v4/anime/${id}`);
    return this.http.get<IAnimeInfo>(url.toString());
  }
}
