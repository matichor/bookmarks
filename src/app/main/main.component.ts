import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from './bookmarks/bookmark.model';
import { Store } from '@ngrx/store';
import { BookmarkState } from '../core/store/bookmark.state';
import * as BookmarkActions from '../../app/core/store/bookmark.action';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  bookmarks: Observable<Bookmark[]>;

  constructor(private store: Store<BookmarkState>) {
    this.bookmarks = store.select('bookmark');
  }

  ngOnInit() {
  }

  addBookmark() {
    this.store.dispatch(new BookmarkActions.AddBookmark({
      name: 'MMMMM', url: 'NNNNNN', bookmarkGroup: 'person'
    }));
  }
}

