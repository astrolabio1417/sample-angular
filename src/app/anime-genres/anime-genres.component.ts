import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimeGenresService } from './anime-genres.service';
import { IGenre, IGenres } from './interface';

@Component({
  selector: 'app-anime-genres',
  templateUrl: './anime-genres.component.html',
  styles: [],
})
export class AnimeGenresComponent {
  genresSubscription: Subscription | undefined;
  genres: IGenres | undefined;
  genre: IGenre | undefined;
  genreList: IGenre[] = [];

  constructor(private service: AnimeGenresService) {}

  ngOnInit() {
    this.genresSubscription = this.service
      .getGenres()
      .subscribe((data) => (this.genres = data));
  }

  ngOnDestroy() {
    this.genresSubscription?.unsubscribe();
  }

  setGenre(genreObj: IGenre) {
    this.genre = genreObj;
    const isOnIndex = this.findIndexOfGenre(genreObj);
    const newGenreList = [...this.genreList];
    isOnIndex === -1
      ? newGenreList.push(genreObj)
      : newGenreList.splice(isOnIndex, 1);
    this.genreList = newGenreList;
  }

  findIndexOfGenre(genreObj: IGenre): number {
    return this.genreList.findIndex((g) => g.mal_id === genreObj.mal_id);
  }
}
