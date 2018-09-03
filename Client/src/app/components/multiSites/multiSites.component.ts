import { Component, OnInit ,Input, ElementRef} from '@angular/core';
import {AppComponent} from '../app/app.component';
import { DataCenterService } from '../../services/DataCenterService';
import {HttpModule, Http} from '@angular/http'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgAnalyzedFile } from '@angular/compiler';
import {RouterModule ,Routes, Router } from '@angular/router'; 
import { HttpTransferService } from '../../services/HttpTransfer.service';
import { HomeComponent } from '../home/home.component';
import { SingleSiteComponent } from '../singleSite/singleSite.component';


@Component({ 
  selector: 'app-multiSites',
  templateUrl: './multiSites.component.html',
  
  styleUrls: ['./multiSites.component.css',
  "w3.css",
"bootstrap-min.css",
"cssbootstrap-min.css",
]
})
export class MultiSitesComponent implements OnInit {
  sites=new Array();
  ratings =new Array();
  feedbackList: any;
  headImg : any="./assets/images/pan.JPG";
  sitesTable ;
  area :string ;
  title:string;
  listOfSites =new Array();
  isByArea:boolean; 
  appRoutes : Routes=[    
    {path: 'singleSite',component : MultiSitesComponent, data : {some_data : 'some value'}},
  ];      
  constructor(private http: Http ,
    private dataCenterService:DataCenterService,private httpTransferService:HttpTransferService,
    private router:Router,private elRef:ElementRef) {
    this.isByArea=this.dataCenterService.getisByArea();
      this.sitesTable= this.dataCenterService.getSitesTables();
      this.area = this.dataCenterService.getArea();
     
      this.headImg ="./assets/images/pan.JPG";
       if(this.area || ! this.isByArea){
          console.log(this.area)
       }
       else{
        alert('cant jump to this page !!!');
         this.router.navigateByUrl('/');
       }
    }
  ngOnInit() {
   this.displayListOfSites();
   
   this.getRatingForSites();
}


redirect(siteName) {// to get site name to 
  for (var i =0;i<this.sitesTable.length ; i++)
  {
   // console.log(this.datas[i]);
    if (siteName == this.sitesTable[i].id){
      this.dataCenterService.setData(this.sitesTable[i]);
      this.dataCenterService.setSiteName(siteName);

      this.router.navigateByUrl('/singleSite');//as per router
    }

  }
}


displayStars(){
  for (var h=0 ; h<this.listOfSites.length ; h++) {
    var rate=0;
    var numberOfComments=0;
    for (var i=0 ; i<this.sites.length ; i++) {
      if (this.listOfSites[h].id == this.sites[i]){
          rate+=this.ratings[i];
          numberOfComments++;  
      }
     
    }
    var stars= Math.round(rate / numberOfComments);// total rating for each  site ( number of stars)
    this.addStars(h+1 , stars);
  }
  
}

addStars(h , rated){ //  h = index for each site -- rated = rating for each site
  
  for (var n = 1; n <=  rated ; n++) 
    document.getElementById('row'+h).innerHTML += '<span class="fa fa-star" style="color: blue;" data-rating="' + (n + 1) + '"></span>';
          
  for (var n = 1; n <= (5 - rated) ; n++)
    document.getElementById('row'+h).innerHTML += '<span class="fa fa-star-o" style="color: blue;" data-rating="' + (n + 1) + '"></span>';
}

getRatingForSites() {
 // this.siteId = this.dataCenterService.getSiteName();
  this.httpTransferService.httpGet('multiSites')
        .then(result => {
  //  this.delay(3000);
    this.feedbackList = result;    
  
      for (let d of this.feedbackList) {
        
          this.sites.push(d.siteName);
          this.ratings.push(d.rating);
          // console.log(this.comms.pop());  
      
   
    }
    
    this.displayStars();
    }
  );
  
}

replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}
displayListOfSites(){
if (! this.isByArea){
  this.listOfSites = this.dataCenterService.getSuggestedSites();
this.title='רשימת אתרים מוצעים'
}
  else{
 
  this.title='אתרים ב'+this.area;
  for (let d of this.sitesTable) {
    //  console.log(d);
      if ( this.area == d.area){
        this.listOfSites.push(d);
 
    }
  }
  }
}
/////////////////////   NOT   IN    USE  //////////////////////////////////
  somefunction(data){
    alert(data);
    this.dataCenterService.setData(data);
    this.router.navigateByUrl('/multiSite');//as per router
  }

}