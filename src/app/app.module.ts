import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { reducer } from './core/store/bookmark.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({
      bookmark: reducer
    }),
    BrowserModule,
    AppRoutingModule,
    MainModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
