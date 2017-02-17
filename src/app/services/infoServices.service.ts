
import    { Injectable }        from '@angular/core';
import    { Http , Response }   from '@angular/http';
import    { Entry }             from '../classes/entry';


@Injectable()
export class InfoServices {

    
    constructor(private http:Http) {
        

    }


    getDataFromServer(keyWord: string){

      let path = "http://en.wikipedia.org/w/api.php?search=" + keyWord + "&action=opensearch&format=json"; 
      
      return this.http.get(path).map(this.analyzeData).catch(this.handleError);    
    }


    getSubjectInformationFromServer(keyWord: string){

        let path = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=" + keyWord;
      
        return this.http.get(path).map(this.extractInformation).catch(this.handleError); 
    }


    extractInformation = (response: Response) => {

        let data = response.json();
        let pageId: string;

        for (let key in data.query.pages) {
            
            pageId = key.toString();
        }       

        return data.query.pages[pageId].extract;
    }


     analyzeData = (response: Response): Entry[] => {
       
       let data             = response.json();
       
       let titles           = data[1];
       let descriptions     = data[2];
       let urls             = data[3];
       
       let entrys: Entry[] = [];
       let id: number = 0;

       for(let i in titles){

           id ++;
           let entry = new Entry(titles[i], descriptions[i], urls[i], id);
           
           entrys.push(entry);
       }

       return entrys; 
     }


    private handleError(error: any): Promise<any> {
        
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);

  }

}


