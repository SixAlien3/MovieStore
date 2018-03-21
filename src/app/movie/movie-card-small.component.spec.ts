import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardSmallComponent } from './movie-card-small.component';

describe('MovieCardSmallComponent', () => {
  let component: MovieCardSmallComponent;
  let fixture: ComponentFixture<MovieCardSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
