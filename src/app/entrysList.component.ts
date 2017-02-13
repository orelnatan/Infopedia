
import { Component, Input }        from '@angular/core';
import { Entry }            from './classes/entry';


@Component({
  selector: 'entrys-list',
  templateUrl: `./app/templates/entrysListComponent.template.html`,
  styleUrls: ['./app/styles/entrysListComponent.style.css'],

  
})


export class EntrysListClass  {

    @Input() entrysList: Entry[] = [];

    constructor(){

    }

    print(){

        console.log(this.entrysList);
    }

}