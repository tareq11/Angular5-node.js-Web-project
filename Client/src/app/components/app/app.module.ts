import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { SingleSiteComponent } from '../singleSite/singleSite.component';
import { MultiSitesComponent } from '../multiSites/multiSites.component';
import {RouterModule ,Routes } from '@angular/router'; 
import {HttpModule} from '@angular/http'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DataCenterService } from '../../services/DataCenterService';
import { HttpTransferService } from '../../services/HttpTransfer.service';
import { AgmCoreModule } from '@agm/core';


const appRoutes : Routes=[
  {path: 'home',component : HomeComponent},
  {path: '',component : HomeComponent},
  {path: 'singleSite',component : SingleSiteComponent},
  {path: 'multiSites',component : MultiSitesComponent}
]; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleSiteComponent,
    MultiSitesComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    AngularFontAwesomeModule,
    
  ],
  providers: [DataCenterService,HttpTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
