import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KameraComponent } from './component/kamera/kamera.component';
import { ApiService} from '../app/services/api.service';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'
import {ShtoKameraComponent} from './modal/shto-kamera/shto-kamera.component';
import { FshiKameraComponent } from './modal/fshi-kamera/fshi-kamera.component';
import { NgbModule,NgbModalModule } from '@ng-bootstrap/ng-bootstrap'
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts'
/*Ketu deklaroj te gjitha modulet qe perdorim 
tek declarations shtojme emrat e komponenteve qe kemi krijuar vet
Tek import modulet qe kemi importuar
*/
@NgModule({
  declarations: [
    AppComponent,
    KameraComponent,
    ShtoKameraComponent,
    FshiKameraComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgbModalModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    ChartsModule,  
  ],
  providers: [ApiService, MatDialogModule,NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [
    ShtoKameraComponent,
    FshiKameraComponent,
    KameraComponent,]
})
export class AppModule { }
