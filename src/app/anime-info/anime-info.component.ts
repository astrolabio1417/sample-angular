import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimeInfoService } from './anime-info.service';
import { IAnimeInfo } from './interface';

@Component({
  selector: 'app-anime-info',
  template: `
    <div>
      <p *ngIf="!animeInfo; else showAnimeInfo"></p>

      <ng-template #showAnimeInfo>
        <div
          class="flex"
          style="flex-direction: column; justify-content: center;"
        >
          <div style="margin: 0 auto;">
            <img
              [src]="animeInfo?.data?.images?.jpg?.large_image_url"
              style="object-fit: cover; height: auto; max-width: 250px;"
              alt="bg"
            />
          </div>
          <h1 style="text-align: center;">
            {{ animeInfo?.data?.title }}
          </h1>

          <p>
            {{ animeInfo?.data?.synopsis }}
          </p>
        </div>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class AnimeInfoComponent {
  id: string | null = null;
  animeInfo: IAnimeInfo | undefined;
  animeInfoSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: AnimeInfoService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) return;
    this.animeInfoSubscription = this.service
      .getAnimeInfo(this.id)
      .subscribe((data) => (this.animeInfo = data));
  }

  ngOnDestroy() {
    this.animeInfoSubscription?.unsubscribe();
  }
}
