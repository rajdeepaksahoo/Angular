import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CarEntity } from '../car-entity';
import { CarserviceService } from '../service/carservice.service';
import { UpdateCarComponent } from '../update-car/update-car.component';
import { ViewOneComponent } from '../view-one/view-one.component';

@Component({
  selector: 'app-viewallcars',
  templateUrl: './viewallcars.component.html',
  styleUrls: ['./viewallcars.component.css']
})
export class ViewallcarsComponent {
  cars : CarEntity[] = [];
  carEntity:CarEntity;

  constructor(private service:CarserviceService,private dialog:MatDialog,private router : Router){

  }
  ngOnInit():void{

    this.getAllCars();
    this.getCarById ();

  }

  getAllCars(){
    this.service.getAllCars().subscribe((data)=>{
      this.cars=data;
      console.log(this.cars)
    },
    error=>{
      this.cars=[];
      console.log("Can't Fetch Data")
    }
    )
  }

  setId(id:string){
    this.service.id=parseInt(id);
  }

  id:string
  showUpdate(id:string){
    this.dialog.open(UpdateCarComponent, {
      width:'70%',
      height:'60%'
      }
      
    )
    console.log(id);
    this.service.id=parseInt(id);
  }

  delete(id:number){
    console.log(id)
    this.service.deleteCarById(id).subscribe(data=>{
      
    }
    )
  }
  
  getCarById () {
    this.service.getCarById(this.service.id).subscribe(data=>{
      this.carEntity=data;
    console.log(this.service.id)
  })
}


showOne(show:string){
  console.log(show)
  this.service.id=parseInt(show);
  console.log(show)
  this.dialog.open(ViewOneComponent, {
    width:'70%',
    height:'50%'
    }
    
  )
}
}