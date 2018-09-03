import { Component, OnInit } from '@angular/core';
import { NgAnalyzedFile } from '@angular/compiler';
import {RouterModule ,Routes, Router } from '@angular/router'; 
import {HttpModule, Http} from '@angular/http'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SingleSiteComponent } from '../singleSite/singleSite.component';
import { MultiSitesComponent } from '../multiSites/multiSites.component';
import {HttpTransferService} from '../../services/HttpTransfer.service';
import { DataCenterService } from '../../services/DataCenterService';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 public allSitesDetails:any;
   appRoutes : Routes=[ // Routing
    {path: 'home',component : HomeComponent},
    {path: '',component : HomeComponent},
    {path: 'singleSite',component : SingleSiteComponent, data : {some_data : 'some value'}},
    {path: 'multiSites',component : MultiSitesComponent, data : {some_data : 'some value'}}
  ];   // in  url url-------------> component name   

  headImg : any="assets/images/pan.JPG";
  zvitanImg: string;
  sakhnehImg: string;
  switzerlandImg: string;
  icon: string;
  email:string='';

  constructor(private router:Router,private dataCenterService:DataCenterService,private http: Http , private httpTransferService: HttpTransferService) { 
    this.headImg ="assets/images/pan.JPG";
    this.zvitanImg ="assets/images/Zvitan.JPG";
    this.sakhnehImg ="assets/images/Sakhneh.jpg";
    this.switzerlandImg ="assets/images/Switzerland.jpg";
    this.icon ="assets/images/icon.png";
    this.getData();
    
  }
  redirectToMultiSites(area){
    this.dataCenterService.setisByArea(true);
    this.dataCenterService.setArea(area);
    this.router.navigateByUrl('/multiSites');// route
  }
  
  ngOnInit() {

   }
sort(){
  var suggestedList= new Array();
  var exists=false;
  for (let element of this.allSitesDetails){
    if (!(<HTMLInputElement>document.getElementById("fire")).checked || element.fire != 0) 
       if (!(<HTMLInputElement>document.getElementById("family")).checked  || element.family != 0) 
           if (!(<HTMLInputElement>document.getElementById("swimming")).checked  || element.swim != 0)
               if (!(<HTMLInputElement>document.getElementById("free")).checked  || element.cost == 0)
                   if (!(<HTMLInputElement>document.getElementById("walking")).checked  || element.attraction.includes("מסלול הליכה"))
                      if (!(<HTMLInputElement>document.getElementById("bysicle")).checked  || element.bysicle != 0)
                          if (!(<HTMLInputElement>document.getElementById("wheelchair")).checked  || element.wheelchair != 0)
                               if ((<HTMLInputElement>document.querySelector('input[name="areaZone"]:checked')).value=='הכל'  || element.area ==(<HTMLInputElement>document.querySelector('input[name="areaZone"]:checked')).value)
                                 if (!(<HTMLInputElement>document.getElementById("water")).checked  || element.nature_type.includes("מים"))
                                      if (!(<HTMLInputElement>document.getElementById("river")).checked  || element.nature_type.includes("נחל"))
                                         if (!(<HTMLInputElement>document.getElementById("lake")).checked  || element.nature_type.includes("אגם"))
                                             if (!(<HTMLInputElement>document.getElementById("park")).checked || element.nature_type.includes("פארק"))
                                                 if (!(<HTMLInputElement>document.getElementById("graceNature")).checked || element.nature_type.includes("נקודת חן"))
                                                     // if ((<HTMLInputElement>document.getElementById("minRating")).value <= rated && document.getElementById("maxRating").value >= rated)
                                                        { 
                                                          suggestedList.push(element);
                                                            console.log(element.id );
                                                            exists=true;
                                                        }
      
    }
    if (exists){
      this.dataCenterService.setSuggestedSites(suggestedList);
      this.dataCenterService.setisByArea(false);
      this.router.navigateByUrl('/multiSites');

    }
    else alert("לא נמצאו אתרים");


}
searchFunction(){
    var site = (<HTMLInputElement>document.getElementById('search-input')).value;
    var exists=false;
    for (var i =0;i<this.allSitesDetails.length ; i++)
    {
     // console.log(this.datas[i]);
      if (site == this.allSitesDetails[i].id){
        this.dataCenterService.setData(this.allSitesDetails[i]);
        this.dataCenterService.setSiteName(site);

        this.router.navigateByUrl('/singleSite');//as per router
        exists=true;
      }
    }
    if (!exists)
      alert('Selected site not found !!!');
   }
    getData() {

     
      this.httpTransferService
    .httpGet('home')
    .then(result => {
     // console.log(result)
      this.allSitesDetails=result; // get all sites data from server
      this.dataCenterService.setSitesTable(result); // save all sites details to datacenter service

      
      return this.allSitesDetails;
    });
     
    }

    redirect(siteName){ // redirect images and titles at home page
      
      var exists=false;
      for (var i =0;i<this.allSitesDetails.length ; i++)
      {
       // console.log(this.datas[i]);
        if (siteName == this.allSitesDetails[i].id){
          this.dataCenterService.setData(this.allSitesDetails[i]);
          this.dataCenterService.setSiteName(siteName);
  
          this.router.navigateByUrl('/singleSite');//navigate (route)
         
        }
      }


    }
    sendMail() {
     window.open('mailto:itour.information@gmail.com?subject=message from ' + (<HTMLInputElement>document.getElementById("username")).value + '&body=' + (<HTMLInputElement>document.getElementById("message")).value);
  }
  
}

