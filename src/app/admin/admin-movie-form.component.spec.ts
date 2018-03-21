import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieFormComponent } from './admin-movie-form.component';

describe('AdminMovieFormComponent', () => {
  let component: AdminMovieFormComponent;
  let fixture: ComponentFixture<AdminMovieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMovieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMovieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
