import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ShtoKameraComponent } from 'src/app/modal/shto-kamera/shto-kamera.component';
import { FshiKameraComponent,FshiKameraModel } from 'src/app/modal/fshi-kamera/fshi-kamera.component';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-kamera',
  templateUrl: './kamera.component.html',
  styleUrls: ['./kamera.component.scss']
})
export class KameraComponent implements OnInit {
  kamera:any;
  result: true;
  groupByRezolucion:any;
  chart:any=[];
  emer:String;
  model:String;
  rezolucion:String;
  ip:String;
  data:'';
  public chartId:any = [];
  public chartTotal: any=[];
  public graphColors: string[] = [
    'rgb(26, 82, 118)',
    'rgb(111, 66, 193)',
    'rgb(253, 126, 20)',
    'rgb(220, 53, 69)',
    'rgb(255, 193, 7)',
    'rgb(40, 167, 69)',
    'rgb(0, 123, 255)',
    'rgb(232, 62, 140)',
    'rgb(32, 201, 151)',
    'rgb(102, 16, 242)',
    'rgb(23, 162, 184)',
    'rgb(255, 184, 34)',
    'rgb(88, 103, 221)',
    'rgb(54, 163, 247)',
    'rgb(244, 81, 108)',
];
  constructor(private router:Router, private apiService:ApiService, private modalService:NgbModal,private matDialog: MatDialog,private location: Location) { }

  ngOnInit() {
  this.createChart();
  this.getAll()
  }

  getAll(){
    this.apiService.getAll().subscribe(data=>{
    console.log(data);
    this.kamera = data
  })
}
getByEmer(emer:String){
  this.apiService.getByEmer(emer).subscribe(data=>{
    this.kamera=data;
  })
}
getByModel(model:String){
  this.apiService.getByModel(model).subscribe(data=>{
    this.kamera=data;
  })
}
getByRezolucion(rezolucion:String){
  this.apiService.getByRezolucion(rezolucion).subscribe(data=>{
    this.kamera=data;
  })
}
getByIp(ip:String){
  this.apiService.getByIp(ip).subscribe(data=>{
    this.kamera=data;
  })
}
  addKamera(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";
    this.matDialog.open(ShtoKameraComponent, dialogConfig);
  }
  delete(id){
    const message = `Jeni i sigurt qe deshironi ta fshini?`;
 
    const dialogData = new FshiKameraModel("Konfirmo veprimin", message);
 
    const dialogRef = this.matDialog.open(FshiKameraComponent, {
      maxWidth: "400px",
      data: dialogData
    });
 
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if(this.result){
        this.fshiKamera(id);
        setTimeout(() => {
          this.ngOnInit();
        }, 500);
      }
    });
  }
  
  private fshiKamera(id){
    this.apiService.deleteKamera(id).subscribe((
      response:any)=>{
      },
      (error) => {
        console.error("There was an error deleting the movement", error);
      }
    )};
    

    //chart
  createChart(){
    this.apiService.groupByRezolucion().subscribe(data=>{
      this.groupByRezolucion=data;
      this.chartId = this.groupByRezolucion.map(item => item.id);
      this.chartTotal = this.groupByRezolucion.map(item => item.total);
  });
  }

//   public pieChartData: any = [
//    {
//      data:this.chartTotal
//    }
// ];
// public pieChartLabels:any = [
//     {
//       labels: this.chartId
//     }
// ];
public pieChartOptions: any = {
    responsive: true
};
public pieChartColors:any = [
    {
        backgroundColor: this.graphColors
    }
];
public pieChartLegend: boolean = true;
public pieChartType: string = 'pie';
}
