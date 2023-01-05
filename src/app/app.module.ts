import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnimeSeasonComponent } from './anime-season/anime-season.component';
import { PlayerSubComponent } from './player/player-sub/player-sub.component';
import { StoreModule } from '@ngrx/store';
import { AnimeGenresComponent } from './anime-genres/anime-genres.component';
import { AnimeGenreComponent } from './anime-genres/anime-genre/anime-genre.component';
import { AnimeInfoComponent } from './anime-info/anime-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    NotFoundComponent,
    AnimeSeasonComponent,
    PlayerSubComponent,
    AnimeGenresComponent,
    AnimeGenreComponent,
    AnimeInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
