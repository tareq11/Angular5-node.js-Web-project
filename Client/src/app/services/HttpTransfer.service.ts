import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpTransferService {



  
  constructor(private http: Http) {
  }



httpGetFeedback(sub_url ,type): Promise<any> {
  const options = {
    headers: new Headers({
      'Content-Type':'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'type':type,
    })
  };
  return this.http.get('http://localhost:3000/' + sub_url, options)
          .toPromise()
          .then(this.extractData)
          .catch(this.handleError);
}
  

postFeedback(sub_url ,site,user ,comment ,rating){
  const options = {
    
    headers: new Headers({
      'Content-Type':'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'site':site,
      'user':user,
      'comment':comment,
      'rating': rating,
          
    })
    
  };
   console.log(options.headers);
  
  this.http.post('http://localhost:3000/', comment, options).subscribe();

}




  httpGet(sub_url): Promise<any> {
    const options = {
      headers: new Headers({
        'Content-Type':'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        
      })
    };
    return this.http.get('http://localhost:3000/' + sub_url, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
  }

  // extract text to json
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
}

// handle error in promise
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
}
 
  

}