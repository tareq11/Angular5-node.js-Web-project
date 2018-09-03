import { Component, Input } from '@angular/core';
import {RouterModule ,Route } from '@angular/router'; 
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from '../home/home.component';
import { SingleSiteComponent } from '../singleSite/singleSite.component';
import { MultiSitesComponent } from '../multiSites/multiSites.component';
import {Router} from "@angular/router"
import { HttpTransferService } from '../../services/HttpTransfer.service';
import {HttpModule, Http} from '@angular/http'
import { DataCenterService } from '../../services/DataCenterService';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  "w3.css",
"./bootstrap-min.css",
"./cssbootstrap-min.css",

]
})


export class AppComponent {
constructor( private dataCenterService:DataCenterService,
  private router:Router,private http: Http , private httpTransferService: HttpTransferService) {}

area = 'north';
  title = 'app';
  headImg : any="./assets/images/pan.JPG";
  public data :any;


 
  ngOnInit() {

   }

}


