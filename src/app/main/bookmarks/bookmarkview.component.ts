import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from './bookmark.model';
import { Store } from '@ngrx/store';
import { BookmarkState } from '../../core/store/bookmark.state';

@Component({
  selector: 'app-bookmarkview',
  templateUrl: './bookmarkview.component.html',
  styleUrls: ['./bookmarkview.component.scss']
})
export class BookmarkViewComponent implements OnInit {

  bookmarks: Bookmark[];

  constructor(private store: Store<BookmarkState>) {
    store.select('bookmark')
      .subscribe(data => {
        this.bookmarks = data;
      });
  }

  ngOnInit() {

  }

}
