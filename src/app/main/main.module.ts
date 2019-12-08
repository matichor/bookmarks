import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { BookmarkViewComponent } from '../main/bookmarks/bookmarkview.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../core/store/bookmark.reducer';
import { MatGridListModule } from '@angular/material';

@NgModule({
    imports: [CommonModule,
        SharedModule, MatGridListModule,
        StoreModule.forRoot({
            bookmark: reducer
        })],
    declarations: [MainComponent, BookmarkViewComponent],
    exports: [MainComponent, BookmarkViewComponent]
})
export class MainModule { }
