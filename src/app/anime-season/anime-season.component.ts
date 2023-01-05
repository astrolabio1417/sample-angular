import { Component } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { AnimeSeasonService, IAnimeSeasons } from './anime-season.service';

@Component({
  selector: 'app-anime-season',
  template: `
    <div>
      <h1>Anime Seasons</h1>
      <div></div>
    </div>
  `,
  styles: [],
})
export class AnimeSeasonComponent {
  loading = true;
  seasons: IAnimeSeasons | null = null;

  // services
  seasonsSubscription: Subscription | undefined;

  constructor(private service: AnimeSeasonService) {}

  ngOnInit() {
    this.seasonsSubscription = this.service
      .getSeasons()
      .subscribe((data) => (this.seasons = data));
  }

  ngOnDestroy() {
    this.seasonsSubscription?.unsubscribe();
  }
}
