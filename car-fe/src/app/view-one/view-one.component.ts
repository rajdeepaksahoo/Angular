import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarEntity } from '../car-entity';
import { CarserviceService } from '../service/carservice.service';
@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewOneComponent {
  carEntity:CarEntity;
  constructor(private service:CarserviceService){}
  ngOnInit(){
    this.submit()
  }
  submit(){
    this.service.getCarById(this.service.id).subscribe(data=>{
      this.carEntity=data;
      console.log(data)
    })
  }
}