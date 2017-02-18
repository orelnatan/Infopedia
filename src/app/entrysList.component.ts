
import { Component, Input, OnInit }                 from '@angular/core';
import { Entry }                            from './classes/entry';
import { Router, ActivatedRoute, Params }   from '@angular/router';

@Component({
  selector: 'entrys-list',
  templateUrl: `./app/templates/entrysListComponent.template.html`,
  styleUrls: ['./app/styles/entrysListComponent.style.css'],

  
})


export class EntrysListClass implements OnInit  {

    @Input() set setEntrysList(list: Entry[]){
        
        this.entrysList = list;
        this.lastSelectedIndex = -1;

        this.getLastSelectedIndex(this.lastSelectedSubject);
    }
    
    @Input() searchKey: string;

    entrysList:             Entry[] = [];
    subjectKey:             string = '';
    
    lastSelectedSubject:    string;
    lastSelectedIndex:      number = -1;

    constructor(private router:     Router,
                 private route:     ActivatedRoute){

    }


    ngOnInit(): void{

        this.route.params.subscribe(params => {
        
          this.lastSelectedSubject = params['subjectKey'];
            
       });
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


    getStyle(index: number){

      let style = {

          'entryDiv':        true,
          'lastSelected':    (index == this.lastSelectedIndex)
          

      };  

      return style;
    }


    getLastSelectedIndex(lastSelectedSubject: string){

        for(let i in this.entrysList){

            if(this.entrysList[i].entryTitle == lastSelectedSubject){
                this.lastSelectedIndex = parseInt(i)
            }
        }

        
    }

}