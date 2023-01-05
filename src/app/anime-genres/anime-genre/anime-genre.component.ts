import { Component, Input, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAnilist, IGenre } from '../interface';
import { AnimeGenreService } from './anime-genre.service';

@Component({
  selector: 'app-anime-genre',
  template: `<div>
    <hr />
    <b>Page: {{ page }}</b> <br />
    <div class="pagination">
      <button class="button_primary" *ngIf="page !== '1'" (click)="setPage()">
        prev
      </button>
      <button
        class="button_primary"
        *ngIf="genreList?.pagination?.has_next_page"
        (click)="setPage(true)"
      >
        next
      </button>
    </div>
    <div *ngIf="genres?.length"><b>Selected: </b></div>
    <div *ngFor="let g of genres">{{ g.name }} |</div>
    <hr />
    <div class="grid" *ngIf="genreList?.data?.length; else other_content">
      <a
        [routerLink]="['/anime', anime.mal_id]"
        [queryParams]="{ title: anime.title }"
        class="anime-item"
        *ngFor="let anime of genreList?.data"
      >
        <img [src]="anime.images.jpg.image_url" alt="img" />
        <div class="genre-title">
          {{ anime.title }}
        </div>
      </a>
    </div>
    <ng-template #other_content>THERE'S NOTHING...</ng-template>
    <div></div>
  </div>`,
  styles: [],
})
export class AnimeGenreComponent {
  private _genres: IGenre[] | undefined;
  genreListSubscription: Subscription | undefined;
  genreList: IAnilist | undefined;
  page: string = '1';

  @Input() set genres(value: IGenre[] | undefined) {
    this.page = '1';
    this._genres = value;
    this.updateGenreList();
  }

  get genres() {
    return this._genres;
  }

  constructor(private service: AnimeGenreService) {}

  ngOnInit() {}

  updateGenreList() {
    this.genreListSubscription?.unsubscribe();
    const malIDs: number[] = this._genres?.map((a) => a.mal_id) ?? [];
    this.genreListSubscription = this.service
      .getGenreList(malIDs.join(','), this.page)
      .subscribe((data) => (this.genreList = data));
  }

  setPage(nextPage: boolean = false) {
    const toAddNumber = nextPage ? 1 : -1;
    this.page = (parseInt(this.page) + toAddNumber).toString();
    this.updateGenreList();
  }
}
