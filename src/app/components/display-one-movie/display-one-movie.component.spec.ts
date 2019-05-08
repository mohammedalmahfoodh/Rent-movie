import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOneMovieComponent } from './display-one-movie.component';

describe('DisplayOneMovieComponent', () => {
  let component: DisplayOneMovieComponent;
  let fixture: ComponentFixture<DisplayOneMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOneMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOneMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
