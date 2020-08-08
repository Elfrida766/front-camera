import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fshi-kamera',
  templateUrl: './fshi-kamera.component.html',
  styleUrls: ['./fshi-kamera.component.scss']
})
export class FshiKameraComponent implements OnInit {
  title: string;
  message: string;
  constructor(private activeModal: NgbActiveModal,private apiService: ApiService,public dialogRef: MatDialogRef<FshiKameraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FshiKameraComponent) { 
      this.title = data.title;
      this.message = data.message;
    }
  ngOnInit() {
  }
  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }
 
  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
  
}
export class FshiKameraModel {
 
  constructor(public title: string, public message: string) {
  }
}