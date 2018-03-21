import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieDetailsComponent } from './admin-movie-details.component';

describe('AdminMovieDetailsComponent', () => {
  let component: AdminMovieDetailsComponent;
  let fixture: ComponentFixture<AdminMovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMovieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
