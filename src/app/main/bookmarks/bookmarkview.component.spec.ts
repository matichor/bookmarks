import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkviewComponent } from './bookmarkview.component';

describe('BookmarkviewComponent', () => {
  let component: BookmarkviewComponent;
  let fixture: ComponentFixture<BookmarkviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
