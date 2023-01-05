import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AnimeGenresComponent } from './anime-genres/anime-genres.component';
import { AnimeInfoComponent } from './anime-info/anime-info.component';
import { AnimeSeasonComponent } from './anime-season/anime-season.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test' },
  { path: 'anime/:id', component: AnimeInfoComponent },
  { path: 'genres', component: AnimeGenresComponent },
  {
    path: 'test',
    component: PlayerComponent,
  },
  { path: 'seasons', component: AnimeSeasonComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
