import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { PostStickItemComponent } from './post-stick-item/post-stick-item.component';
import { PostStickListComponent } from './post-stick-list/post-stick-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PostStickItemComponent,
    PostStickListComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
