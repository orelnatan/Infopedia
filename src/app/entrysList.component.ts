
import { Component, Input }                 from '@angular/core';
import { Entry }                            from './classes/entry';
import { Router, ActivatedRoute, Params }   from '@angular/router';

@Component({
  selector: 'entrys-list',
  templateUrl: `./app/templates/entrysListComponent.template.html`,
  styleUrls: ['./app/styles/entrysListComponent.style.css'],

  
})


export class EntrysListClass  {

    @Input() entrysList: Entry[] = [];
    @Input() searchKey: string;

    subjectKey: string = '';


    constructor(private router: Router){

    }

    print(){

        console.log(this.entrysList);
    }


    setSubjectKey(entry: Entry){
        
        this.subjectKey = entry.entryTitle;

    }



    sendUrlParams(){

        this.router.navigate(['/entryView', {subjectKey: this.subjectKey, searchKey: this.searchKey}]);

    }

}