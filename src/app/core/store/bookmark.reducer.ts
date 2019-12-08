import { Action } from '@ngrx/store'
import { Bookmark } from '../../main/bookmarks/bookmark.model';
import * as BookmarkActions from '../store/bookmark.action';

const initialState: Bookmark[] = [
    {
        name: 'Sample_1',
        url: 'http://google.com',
        bookmarkGroup: 'person'
    }, {
        name: 'Sample_2',
        url: 'http://yahoo.com',
        bookmarkGroup: 'work'
    }, {
        name: 'Sample_3',
        url: 'https://www.bing.com',
        bookmarkGroup: 'leaisure'
    }
];

export function reducer(state: Bookmark[] = initialState, action: BookmarkActions.Actions) {

    switch (action.type) {
        case BookmarkActions.ADD_BOOKMARK:
            return [...state, action.payload];
        case BookmarkActions.REMOVE_BOOKMARK:
            let newState = [...state];
            newState.splice(action.payload, 1);
            return newState;
        default:
            return state;
    }
}
