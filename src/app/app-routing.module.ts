import { NgModule }             from      '@angular/core';
import { RouterModule, Routes } from      '@angular/router';

import { AppClass }             from      './app.component';
import { SearchBarClass }       from      './searchBar.component';
import { EntrysListClass }      from      './entrysList.component';
import { EntryViewClass }       from      './entryView.component';

const routes: Routes = [

  { path: '',                             component: SearchBarClass  },
  { path: 'SearchBar',                    component: SearchBarClass  },
  { path: 'entryView',                    component: EntryViewClass  }

];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})


export class AppRoutingModule {

    constructor(){


    }

}


