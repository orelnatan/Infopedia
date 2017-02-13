
import { Component }        from '@angular/core';
import { InfoServices }     from './services/infoServices.service';
import { Entry }            from './classes/entry';
import                           './operators/rxjs-operators';

@Component({
  selector: 'my-app',
  templateUrl: `./app/templates/myAppComponent.template.html`,
  styleUrls: ['./app/styles/myAppComponent.style.css'],

  providers: [InfoServices],
})


export class AppClass  { 

  notifications = {

     searchImgUrl:    'http://findicons.com/files/icons/887/web/256/explorer.png',
     titleText:       'Search for anything...',
     boxHolderText:   'Insert some free text'

  };

  entrys: Entry[] = [];


  constructor(private infoServices: InfoServices){

  }


  getUserInput(reference: any){

    this.infoServices.getDataFromServer(reference.value).subscribe((response) => {
                       
        this.entrys = response;
        
    });

   
    

  }


}
