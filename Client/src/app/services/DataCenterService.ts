import { Injectable } from '@angular/core';
import {Router} from "@angular/router"
@Injectable()
export class DataCenterService {

  constructor(
    
    private router:Router,
    
  ) { }

  private data;// not in use
  private siteName;
  private area;// used in navbar (buttons area)
  private sitesTable ;// save all sites details (for filter)
  private isArea:boolean ; // for multiSites 
  private suggestedSites ; // resutls for sorting


  setSuggestedSites(suggestedSites){
    this.suggestedSites = suggestedSites;
  }

  getSuggestedSites(){
     return this.suggestedSites;
   }

   setisByArea(isArea){
    this.isArea = isArea;
  }

  getisByArea(){
     return this.isArea;
   }
  setSitesTable(sitesTable){
    this.sitesTable = sitesTable;
  }

  getSitesTables(){

     return this.sitesTable;
   }

  setArea(area){
    this.area = area;
  }

  getArea(){
   
    return this.area;
  }
  setSiteName(siteName){
    this.siteName = siteName;
  }

  getSiteName(){
    let temp = this.siteName;
    return temp;
  }

  setData(data){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    return temp;
  }



}