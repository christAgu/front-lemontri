import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LesaviezvousComponent } from './lesaviezvous/lesaviezvous.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { MiddleComponent } from './middle/middle.component';
import { FoundersComponent } from './founders/founders.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LesaviezvousComponent,
    ModalComponent,
    MiddleComponent,
    FoundersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
