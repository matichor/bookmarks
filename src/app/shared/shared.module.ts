import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BookmarkFormComponent } from '../shared/components/bookmark-form/bookmark-form.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        BookmarkFormComponent,
        BookmarksComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserModule,
        RouterModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatIconModule,
        MatTooltipModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule],
    exports: [BookmarksComponent, BookmarkFormComponent]
})
export class SharedModule {
}
