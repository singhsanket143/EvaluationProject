import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CreativeSelectorComponent } from './creative-selector/creative-selector.component';
import {ShortListComponent} from './creative-selector/short-list/short-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ShortListService} from './creative-selector/short-list/short-list.service';
import {CreativeSelectorService} from './creative-selector/shared/creative-selector.service';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ShortListComponent,
    CreativeSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [ShortListService, CreativeSelectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
