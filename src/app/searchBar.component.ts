import { Component }        from '@angular/core';
import { InfoServices }     from './services/infoServices.service';
import { Entry }            from './classes/entry';
import                           './operators/rxjs-operators';


@Component({
  selector: 'search-bar',
  templateUrl: `./app/templates/searchBarComponent.template.html`,
  styleUrls: ['./app/styles/searchBarComponent.style.css'],

  providers: [InfoServices],
})


export class SearchBarClass  {


    notifications = {

     searchImgUrl:    'http://findicons.com/files/icons/887/web/256/explorer.png',
     titleText:       'Search for anything...',
     boxHolderText:   'Insert some free text'

  };

  entrys:     Entry[] = [];
  searchName: string = '';

  constructor(private infoServices: InfoServices){

  }


  getUserInput(reference: any){

    this.searchName = reference.value;
    this.infoServices.getDataFromServer(this.searchName).subscribe((response) => {
                       
        this.entrys = response;
        
    });

  }


}
