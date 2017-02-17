import { NgModule }                     from     '@angular/core';
import { BrowserModule }                from     '@angular/platform-browser';
import { FormsModule }                  from     '@angular/forms';
import { HttpModule, JsonpModule }      from     '@angular/http';
import { AppRoutingModule }             from      './app-routing.module';

import { AppClass }                     from      './app.component';
import { SearchBarClass }               from      './searchBar.component';
import { EntrysListClass }              from      './entrysList.component';
import { EntryViewClass }               from      './entryView.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, AppRoutingModule ],
  declarations: [ AppClass, SearchBarClass, EntrysListClass, EntryViewClass ],
  bootstrap:    [ AppClass ]
})

export class AppModule { }
