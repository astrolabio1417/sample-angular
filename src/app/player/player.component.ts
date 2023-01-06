import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IScheduleList, MalService } from './player.service';
import { Observable } from 'rxjs';
import { IUser } from '../store/auth.reducer';
import { Store } from '@ngrx/store';
import { login, logout } from '../store/auth.actions';

@Component({
  selector: 'app-player',
  template: `
    <div>
      {{ auth | async | json }}
      <hr />
      <button (click)="onLogin()">login</button>
      <button (click)="onLogout()">logout</button>

      <player-sub></player-sub>
      {{ hellopo }}
      <img
        class="sample"
        [class.activated]="activate"
        [ngClass]="{ eto_lalabas: true, eto_hindi_lalabas: false }"
        [src]="testImage.src"
        height="25"
        width="auto"
        alt="tes"
      />

      <form (ngSubmit)="onNumberSubmit($event)">
        <input type="number" [(ngModel)]="newNumber" name="newNumber" />
      </form>

      <button (click)="setShow()">
        {{ show ? 'hide' : 'show' }}
      </button>

      <ul *ngIf="show">
        <li *ngFor="let num of sampleList" (click)="onClickNum(num)">
          {{ num }}
          <button (click)="onClickDelete(num)">Delete</button>
        </li>
      </ul>

      <div
        *ngFor="let anime of malSchedules?.data"
        style="font-size: xx-large; flex"
      >
        <a [href]="anime.url">
          <img
            [src]="anime.images.jpg.image_url"
            [alt]="anime.title"
            height="70"
            width="auto"
          />
          {{ anime.title }}
        </a>
      </div>
    </div>
  `,
  styles: [],
})
export class PlayerComponent {
  hellopo = 'sample data from component';
  testImage = {
    src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==',
  };
  sampleList: number[] = [1, 2, 3, 4, 5];
  newNumber: number = 0;
  show = true;
  activate = true;
  malSchedules: IScheduleList | null = null;

  auth: Observable<IUser> | undefined;

  // subscribers
  schedulesSubs: Subscription | undefined;

  constructor(
    private service: MalService,
    private store: Store<{ auth: IUser }>
  ) {
    this.auth = store.select('auth');
  }

  onLogin() {
    this.store.dispatch(
      login({
        payload: {
          type: 'magpapalit',
          data: { level: 5, name: 'magno', position: 'basurero' },
        },
      })
    );
  }

  onLogout() {
    this.store.dispatch(logout());
  }

  ngOnInit() {
    this.schedulesSubs = this.service
      .getSchedule()
      .subscribe((data) => (this.malSchedules = data));
  }

  ngOnDestroy() {
    this.schedulesSubs?.unsubscribe();
  }

  setShow() {
    this.show = !this.show;
  }

  onNumberSubmit(e: SubmitEvent) {
    e.preventDefault();
    this.sampleList.push(this.newNumber);
    this.newNumber = 0;
  }

  onClickNum(num: number) {
    console.log('Clicked', num);
  }

  onClickDelete(num: number) {
    this.sampleList = this.sampleList.filter((n) => n !== num);
  }
}
