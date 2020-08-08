import { Component, OnInit, ViewChild,  Output, EventEmitter} from '@angular/core';
import {ApiService} from '../../services/api.service';
import { from } from 'rxjs';
import { Kamera } from 'src/app/model/kamera';
import { NgForm } from '@angular/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef } from "@angular/material/dialog";
import { Location } from '@angular/common';

@Component({
  selector: 'app-shto-kamera',
  templateUrl: './shto-kamera.component.html',
  styleUrls: ['./shto-kamera.component.scss']
})
export class ShtoKameraComponent implements OnInit {
  kamera: Kamera={
    id:null,
    emer:"",
    model:"",
    rezolucion:"",
    ip:""
  }
  
  error: string = null;
  constructor(private apiService: ApiService,private activeModal: NgbActiveModal,public dialogRef: MatDialogRef<ShtoKameraComponent>,private location: Location) { }

  ngOnInit() {
  }
 @ViewChild("form",{static: true }) form: NgForm;
  save() {
    this.error = null;
    if(this.form.invalid) {
      console.warn("Form is invalid");
      return false;
    }
    this.apiService.saveKamera(this.kamera)
        .subscribe(
            data => {
                this.close();
                setTimeout(() => {
                  window.location.reload();
                }, 500);
            },
            
            error => {
                console.log(error)
            });
}
close() {
  
  this.dialogRef.close("Thanks for using me!");
}
}