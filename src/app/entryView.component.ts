
import { Component, Input, OnInit }        from '@angular/core';
import { ActivatedRoute, Params, Router }  from '@angular/router';
import { Entry }                           from './classes/entry';
import { InfoServices }                    from './services/infoServices.service';
import                                          'rxjs/add/operator/switchMap';
import                                          './operators/rxjs-operators';

@Component({
  selector: 'entry-view',
  templateUrl: `./app/templates/entryViewComponent.template.html`,
  styleUrls: ['./app/styles/entryViewComponent.style.css'],

  providers: [InfoServices],
})


export class EntryViewClass implements OnInit {

    notifications = {

       goBackButtonImgUrl:    'https://maxcdn.icons8.com/Color/PNG/24/Industry/return-24.png',
       openWabButtonImgUrl:   'https://maxcdn.icons8.com/Color/PNG/24/Logos/internet_explorer-24.png',
       emptyImg:              'http://www.cross-drive.eu/public/sites/all/modules/media_gallery/images/empty_gallery.png'

    };


    entrys:         Entry[] = [];
    entry:          Entry = new Entry('', '', '', 0); 

    searchKey:      string;
    subjectKey:     string;
    entryContent:   string = '';


    constructor(private route:          ActivatedRoute, 
                private router:         Router,
                private infoServices:   InfoServices){   
    }


    ngOnInit(): void {
  
        this.route.params.subscribe(params => {
        
            this.searchKey  = params['searchKey'];
            this.subjectKey = params['subjectKey'];
            
            this.getEntryByKeyWord(this.subjectKey);
          
        });
    }


    getEntryByKeyWord(keyWord: string){

        this.infoServices.getDataFromServer(keyWord).subscribe((response) => {
                       
            this.entrys = response;
            
            for(let i in this.entrys){

                if(this.entrys[i].entryTitle == keyWord){
                   
                   this.entry = this.entrys[i];
                   this.getEntryContent(this.entry);
                }
            }

        });

    }
    

    getEntryContent(entry: Entry){

        this.infoServices.getSubjectInformationFromServer(entry.entryTitle).subscribe((response) => {
        
            this.entryContent = response;

        });
    }
      

    goBack(){
    
        this.router.navigate(['/SearchBar', {subjectKey: this.subjectKey, searchKey: this.searchKey}]);
    }    
    

    openWab(){

        window.open(this.entry.entryUrl);

    }

}
