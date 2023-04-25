import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarEntity } from '../car-entity';
import { CarserviceService } from '../service/carservice.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ViewOneComponent } from '../view-one/view-one.component';
@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})

export class UpdateCarComponent {
  

  
  carEntity:CarEntity = new CarEntity();
  
  id : string;


  constructor(private service:CarserviceService,private router:ActivatedRoute ,private route:Router,private dialog:MatDialog,public dialogRef: MatDialogRef<ViewOneComponent>){
  }
  ngOnInit(): void {
    this.service.getCarById(this.service.id).subscribe(data=>{
      this.carEntity=data
      console.log("cdcscs")
      console.log("tghbj "+data.regn_No)
    })

    this.router.params.subscribe(params => {
      const myParam = params;
      console.log(myParam);
      })
  }

  updateCar(){
    this.service.updateAllCars(this.carEntity).subscribe(data=>{
        this.carEntity=data;
      }
    );
    this.dialogRef.close(ViewOneComponent)
    this.route.navigate(['/viewallcars']);
  }
  
  submit(){
    this.updateCar();
    console.log(this.carEntity)

  }
}
