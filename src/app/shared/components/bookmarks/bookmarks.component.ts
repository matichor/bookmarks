import { Component, OnInit, Input } from '@angular/core';
import * as BookmarkActions from '../../../core/store/bookmark.action';
import { Bookmark } from 'src/app/main/bookmarks/bookmark.model';
import { Store } from '@ngrx/store';
import { BookmarkState } from '../../../core/store/bookmark.state';

export class Group {
  level = 0;
}


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  public dataSource = [];

  columns: any[];
  displayedColumns: string[];
  groupByColumns: string[] = [];
  _bookmarks: Bookmark[];
  groupCount = 0;


  constructor(private store: Store<BookmarkState>) {
    this.columns = [
      {
        field: 'name',
        fieldName: 'Name',
        actionCol: false
      }, {
        field: 'url',
        fieldName: 'URL',
        actionCol: false
      },
      {
        field: 'bookmarkGroup',
        fieldName: 'Group',
        actionCol: false
      },
      {
        field: 'del',
        fieldName: '',
        actionCol: true
      }];

    this.displayedColumns = this.columns.map(column => column.field);
    this.groupByColumns = ['bookmarkGroup'];
  }

  @Input('bookmarks')
  set bookmarks(bookmarks: Bookmark[]) {
    this.setOrginalIndex(bookmarks);
    this._bookmarks = this.addGroups(bookmarks, this.groupByColumns);
  }
  get bookmarks() {
    return this._bookmarks;
  }
  ngOnInit() {
  }

  addGroups(data: any[], groupByColumns: string[]): any[] {
    const rootGroup = new Group();
    return this.getSublevel(data, 0, groupByColumns, rootGroup);
  }

  getSublevel(data: any[], level: number, groupByColumns: string[], parent: Group): any[] {
    if (level >= groupByColumns.length) {
      return data;
    }
    const groups = this.uniqueBy(
      data.map(
        row => {
          const result = new Group();
          result.level = level + 1;
          for (let i = 0; i <= level; i++) {
            result[groupByColumns[i]] = row[groupByColumns[i]];
          }
          return result;
        }
      ),
      JSON.stringify);
    this.groupCount = groups.length;
    const currentColumn = groupByColumns[0];
    let subGroups = [];
    groups.forEach(group => {
      const rowsInGroup = data.filter(row => group[currentColumn] === row[currentColumn]);
      const subGroup = this.getSublevel(rowsInGroup, level + 1, groupByColumns, group);
      subGroup.unshift(group);
      subGroups = subGroups.concat(subGroup);
    });
    return subGroups;
  }

  setOrginalIndex(data: any[]) {
    data.forEach((item, index) => {
      item.orginId = index;
    });
  }

  uniqueBy(a, key) {
    const seen = {};
    return a.filter((item) => {
      const k = key(item);
      return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    });
  }

  isGroup(index, item): boolean {
    return item.level;
  }

  removeAt(index: number) {
    this.removeBookmark(index);
  }

  removeBookmark(index: number) {
    let bookmark: any;

    for (const [indexRow, item] of this.bookmarks.entries()) {
      if (index === indexRow) {
        bookmark = item;
      }
    }
    this.store.dispatch(new BookmarkActions.RemoveBookmark(bookmark.orginId));
  }
}
