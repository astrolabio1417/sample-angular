import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeSeasonComponent } from './anime-season.component';

describe('AnimeSeasonComponent', () => {
  let component: AnimeSeasonComponent;
  let fixture: ComponentFixture<AnimeSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeSeasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
