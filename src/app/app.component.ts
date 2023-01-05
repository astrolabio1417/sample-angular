import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="root">
      <div><a routerLink="/genres">Anime Genres</a></div>
      <h1>Welcome to {{ title }}!</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Hello world!';
}
