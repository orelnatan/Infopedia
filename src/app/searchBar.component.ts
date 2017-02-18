import { Component, OnInit }                  from '@angular/core';
import { ActivatedRoute, Params, Router }     from '@angular/router';
import { InfoServices }                       from './services/infoServices.service';
import { Entry }                              from './classes/entry';
import                                             './operators/rxjs-operators';


@Component({
  selector: 'search-bar',
  templateUrl: `./app/templates/searchBarComponent.template.html`,
  styleUrls: ['./app/styles/searchBarComponent.style.css'],

  providers: [InfoServices],
})


export class SearchBarClass implements OnInit  {


    notifications = {

     searchImgUrl:    'http://findicons.com/files/icons/887/web/256/explorer.png',
     titleText:       'Search for anything...',
     boxHolderText:   'Insert some free text'

  };

  entrys:         Entry[] = [];
  searchName:     string = '';
  
  defaultValue:   string = '';

  
  constructor(private route:          ActivatedRoute, 
              private router:         Router,
              private infoServices:   InfoServices){   
  }


  ngOnInit(): void{

       this.route.params.subscribe(params => {
        
          this.defaultValue  = params['searchKey'];
          
          if(this.defaultValue != undefined)
              this.getUserInput(this.defaultValue);
            
      });

  }


  getUserInput(searchName: string){

      this.searchName = searchName; 
      this.infoServices.getDataFromServer(this.searchName).subscribe((response) => {
                        
          this.entrys = response;
          
      });

  }


}
