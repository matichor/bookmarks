import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Bookmark } from '../../../main/bookmarks/bookmark.model';
import { Store } from '@ngrx/store';
import { BookmarkState } from '../../../core/store/bookmark.state';
import * as BookmarkActions from '../../../core/store/bookmark.action';


@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss']
})
export class BookmarkFormComponent implements OnInit {
  bookmarkFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<BookmarkState>) {
    this.bookmarkFormGroup = fb.group({
      name: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
      group: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  addBookmark(bookmark: Bookmark) {
    this.store.dispatch(new BookmarkActions.AddBookmark(bookmark));
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const dataForm = form.value;
      this.addBookmark(
        {
          name: dataForm.name,
          url: dataForm.url,
          bookmarkGroup: dataForm.group
        });
    }
  }
}
