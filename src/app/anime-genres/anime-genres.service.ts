import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGenres } from './interface';

@Injectable({ providedIn: 'root' })
export class AnimeGenresService {
  constructor(private http: HttpClient) {}

  getGenres() {
    return this.http.get<IGenres>('https://api.jikan.moe/v4/genres/anime');
  }
}
