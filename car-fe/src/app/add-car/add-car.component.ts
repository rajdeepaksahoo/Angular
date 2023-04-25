import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarEntity } from '../car-entity';
import { CarserviceService } from '../service/carservice.service';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  carEntity:CarEntity = new CarEntity();

    constructor(private service:CarserviceService, private route : Router){

    }

    addCar(){
      this.service.addAllCars(this.carEntity).subscribe(data=>{
          console.log(data)
          
        },
        error=>{
          console.log(error)
        }

        );
        this.route.navigate(['/viewallcars']);
    }
    submit(){
      this.addCar();
      console.log(this.carEntity)
    }
}