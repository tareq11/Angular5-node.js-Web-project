import { Component, OnInit } from '@angular/core';
import { NgAnalyzedFile } from '@angular/compiler';
import {RouterModule ,Routes, Router } from '@angular/router'; 
import {HttpModule, Http} from '@angular/http'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MultiSitesComponent } from '../multiSites/multiSites.component';
import {HttpTransferService} from '../../services/HttpTransfer.service';
import { timeout } from 'q';
import { DataCenterService } from '../../services/DataCenterService';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Pipe({
  name: 'index'
})
@Component({
  selector: 'app-singleSite',
  templateUrl: './singleSite.component.html',
  styleUrls: ['./singleSite.component.css']
  // ,'agm-map {height: 300px;}']
})
export class SingleSiteComponent implements OnInit {

  totalRating: number;
  siteNumber: any;
  ngOnInit() {
    this.getFeedbacks();
    this.showDivs(this.slideIndex);
   // this.displayComments(this.comms , this.users , this.ratings);
  }
  selectedSiteData: any;
  feedbackList: any;
  public siteId :string;
  cnt :number=0;
  
  public slideIndex = 1;
  comms = new Array();
  users = new Array();
  ratings = new Array();
  images = new Array();
  mapImg:string="assets/images/map.jpg";
  
  constructor(private dataCenterService:DataCenterService,private http: Http , private httpTransferService: HttpTransferService) {
    
    this.selectedSiteData= this.dataCenterService.getData();
    this.images=this.selectedSiteData.images.split(';');
    this.siteId =this.dataCenterService.getSiteName();
    this.mapImg ="assets/images/map.jpg";
  
    this.getData();
  
  }
 
    getData() {
    this.httpTransferService.httpGet('singleSite')
          .then(result => {
            var list = result;    
           
          this.handleProperties(this.selectedSiteData);
        
          })
          .catch(error => console.log(error));
          
  }

 
  setRated(rating) { //show rating by stars (overall rating)
   
    var content = '';
    for (var n = 1; n <= rating ; n++) {

        content += '<span class="fa fa-star" style="color: blue;" data-rating="' + (n + 1) + '"></span>';
    }
    for (var n = 1; n <=  (5 - rating) ; n++) {

        content += '<span class="fa fa-star-o" style="color: blue;" data-rating="' + (n + 1) + '"></span>';
    }
    content += '<input type="hidden" name="whatever1" class="rating-value" value="2.56">';
    document.getElementsByClassName("rated")[0].innerHTML = content;
}

  setTotalRating(rating) { // calculate avarage of users rating 
   
    var sum = 0;
    for (var i = 0; i < rating.length; i++) {
        sum += parseInt(rating[i], 10); 
    }

    return  Math.round(sum / rating.length);
  }

  getFeedbacks() {
    
    this.siteId = this.dataCenterService.getSiteName();
    this.httpTransferService.httpGet('singleSite')
          .then(result => {
      this.feedbackList = result;    // get feedbacks from server
     
        for (let d of this.feedbackList) {
          if (this.siteId == d.siteName){// save feedback details in arrays
            this.siteNumber = d.siteNumber;
            this.comms.push(d.comment);
            this.users.push(d.username);
            this.ratings.push(d.rating);
        }
     
      }
      var imagesElement = document.getElementsByClassName("w3-display-container mySlides") as HTMLCollectionOf<HTMLElement>
      this.totalRating  = this.setTotalRating(this.ratings);
      imagesElement[0].style.display="block";
      this.setRated(this.totalRating);
      this.displayComments(this.comms , this.users , this.ratings);
    
      
      }
    );
  }
  
  calculateRating() {

    var starClassContent = document.getElementsByClassName("star-rating")[0].innerHTML;
    var count = (starClassContent.match(/fa fa-star-o/g) || []).length;
    return 5 - count;

}

star(starsNumer:number){
  
  for (var i=1 ; i<=starsNumer ; i++ ){
     //  alert("star"+i + " *");
    document.getElementById('star'+i).className =('fa fa-star');
  }
  for (var j=5  ; j> starsNumer ; j-- ){
     //  alert("star"+j+" o");
      document.getElementById('star'+j).className =('fa fa-star-o');
  }
}

  addCommentFunction(){
 
var site_id = this.siteNumber;
var comment =document.getElementById("commenttxt") as HTMLInputElement ;
var username =document.getElementById("realName") as HTMLInputElement ;
var rating = this.calculateRating();
var data = {
  'site'     : site_id, 
  'user'     : username.value,
  'comment'  : comment.value,
  'rating'   : rating
        };
      if (username.value != '' && comment.value != '' && (rating > 0 && rating <= 5)){
          this.httpTransferService.postFeedback('singleSite' ,site_id,username.value,comment.value ,rating);
          alert("תגובתך נקלטה בהצלחה");
      }
      else
        alert("נא למלא שדות חובה ");
  }

  addImages(photos) {// not in use
    var images = '';
    for (var n = 0; n < photos.length ; n++) {


        images +='\
    <div class="w3-display-container mySlides">\
    <img  src="' + photos[n] + '" style="width:100%;margin-bottom:-6px">\
    </div>';        
    
    }

    var cc = document.getElementsByClassName("w3-container");
    
}

 addSlider(photos) {// not in use
    var images = '';

    for (var n = 0; n < photos.length ; n++) {



        images +='\
    <div class="w3-col s3">\
      <img  class="demo w3-opacity w3-hover-opacity-off" src="' + photos[n] + '" style="width:100%;cursor:pointer" onclick="aas('+(n+1)+')">\
    </div>';        
    }

    let cc = document.getElementsByClassName(" w3-row-padding w3-section");
   

    cc[0].innerHTML = images;
   // cc[0].style.width = ("70%");
}


  // displayCom(comments , names , ratings) {
   
  
  
  //   var com = '';
  //   for (var n = 0; n < comments.length ; n++) {
  //       var rate = ratings[n];
  //       var content = '';
  //       for (var j = 1; j <= 5 - (5 - rate) ; j++) {
  
  //           content += '<span class="fa fa-star" style="color: gray;" data-rating="' + (j + 1) + '"></span>';
  //       }
  //       for (j = 1; j <= (5 - rate) ; j++) {
  
  //           content += '<span class="fa fa-star-o" style="color: gray;" data-rating="' + (j + 1) + '"></span>';
  //       }
  //       content += '<input type="hidden" name="whatever1" class="rating-value" value="2.56">';
  //     //  com += ' <textarea style="text-align:right; border:1px; border-style:solid; border-color:#8080ff; padding: 0.2em;border-radius: 10px;" disabled>' + comments[n] +" : "+names[n] + '</textarea> <br>';
  //       com += '<fieldset style="text-align:right; padding: 10px;border-radius: 10px; border:1px solid #00802b;">\
  //      <legend style="text-align:right; border:1px; border-style:solid; border-color:#00cc44;border-radius: 10px;width:10%;font-size:16px;"> ' + names[n] + ' </legend> ' + comments[n] + '<br> ' + content + '</fieldset> <br>';
  
  //   }
  //   document.getElementsByClassName("comm")[0].innerHTML = com;
  // } 


//////////////////// not in use
  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
////////////////// NOT IN USE
seTitle(data){ 
  document.getElementById("siteName").innerHTML = data;
}

displayComments(comments , names , ratings) {
   
  
  
  var com = '';
  for (var n = 0; n < comments.length ; n++) {
      var rate = ratings[n];
      var content = '';
      for (var j = 1; j <= 5 - (5 - rate) ; j++) {

          content += '<span class="fa fa-star" style="color: gray;" data-rating="' + (j + 1) + '"></span>';
      }
      for (j = 1; j <= (5 - rate) ; j++) {

          content += '<span class="fa fa-star-o" style="color: gray;" data-rating="' + (j + 1) + '"></span>';
      }
      content += '<input type="hidden" name="whatever1" class="rating-value" value="2.56">';
    //  com += ' <textarea style="text-align:right; border:1px; border-style:solid; border-color:#8080ff; padding: 0.2em;border-radius: 10px;" disabled>' + comments[n] +" : "+names[n] + '</textarea> <br>';
      com += '<fieldset style="text-align:right; padding: 10px;border-radius: 10px; border:1px solid #00802b;">\
     <legend style="text-align:right; border:1px; border-style:solid; border-color:#00cc44;border-radius: 10px;width:10%;font-size:16px;"> ' + names[n] + ' </legend> ' + comments[n] + '<br> ' + content + '</fieldset> <br>';

  }
  document.getElementsByClassName("comm")[0].innerHTML = com;
} 

handleProperties(site) {
    
  
    // openning Time
    if (site.time != 0) {
        
      document.getElementById("openingTimeDiv").innerHTML='<hr> <h4 id="openingTimeTitle"><strong>שעות פתחיה</strong></h4>\
      <br><p align="right">' + this.replaceAll(site.time, "@", "<br/>") + '</p>';
  }
  
    // Cost
    if (site.cost == 0)
    this.addPropertyToDiv("money", " חינם");
    else
    this.addPropertyToDiv("money", site.cost);
    // Cost
    if (site.bysicle != 0)
    this.addPropertyToDiv("bicycle", site.bysicle);
    // Cost
    if (site.eveningTour != 0)
    this.addPropertyToDiv("moon-o", site.eveningTour);
    // Cost
    if (site.family != 0)
    this.addPropertyToDiv("users", site.family);
    // Cost
    if (site.jeep != 0)
    this.addPropertyToDiv("jeep", site.jeep);
    // Cost
    if (site.fire != 0)
    this.addPropertyToDiv("fire", site.fire);

    if (site.swim != 0)
    this.addPropertyToDiv("swimming", site.swim);

    if (site.viewpoint != 0)
    this.addPropertyToDiv("eye", site.viewpoint);

    if (site.wheelchair != 0)
    this.addPropertyToDiv("wheelchair", site.wheelchair);

    // Accessibility
    this.addPropertyToDiv("blind", site.accessibility);
}

addPropertyToDiv( icon ,propertyValue) {
  var selectedDiv;
  var content = '';

  selectedDiv = document.getElementsByClassName("w3-col s6")[this.cnt % 2];
  this.cnt++;
  content = selectedDiv.innerHTML;
  selectedDiv.innerHTML = content + '<p>'+propertyValue+'  <i class="fa fa-'+icon+'"></i></p>';
  //alert(selectedDiv);
  }






// used in slide
 w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
 w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Slideshow Apartment Images
 


 plusDivs(n) {
  this.showDivs(this.slideIndex += n);
}

 currentDiv(n) {
  this.showDivs(this.slideIndex = n);
}

 showDivs(n) {
  var i;

  // (<HTMLInputElement>document.getElementsByClassName('mySlides'))
  var x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>
  //var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[this.slideIndex-1].style.display = "block";
  dots[this.slideIndex-1].className += " w3-opacity-off";
 }

 redirectToMap(){
  window.open(this.selectedSiteData.location);
 }

}
