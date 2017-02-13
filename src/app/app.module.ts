import { NgModule }                     from     '@angular/core';
import { BrowserModule }                from     '@angular/platform-browser';
import { FormsModule }                  from     '@angular/forms';
import { HttpModule, JsonpModule }      from     '@angular/http';

import { AppClass }            from './app.component';
import { EntrysListClass }              from './entrysList.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
  declarations: [ AppClass, EntrysListClass ],
  bootstrap:    [ AppClass ]
})

export class AppModule { }
