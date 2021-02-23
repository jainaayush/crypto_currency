import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.scss']
})
export class PassengerInfoComponent implements OnInit {
  @Input() optionValue: any;
  getPayPal: string;
  getVisa: string;
  getPay: string;
  getMasterCard: string;
  getEmail: string;
  getLocation: string;
  getPhone: string;

  constructor(
    public service: PassengerService
  ) { }

  ngOnInit() {
    this.service.getPayPalValue().subscribe(val => {
      this.getPayPal = val;
    });

    this.service.getVisaValue().subscribe(val => {
      this.getVisa = val;
    });

    this.service.getPayValue().subscribe(val => {
      this.getPay = val;
    });

    this.service.getMasterCardValue().subscribe(val => {
      this.getMasterCard = val;
    });

    this.service.getEmail().subscribe(val => {
      this.getEmail = val;
    });

    this.service.getPhone().subscribe(val => {
      this.getPhone = val;
    });
    
    this.service.getLocation().subscribe(val => {
      this.getLocation = val;
    });

    // return forkJoin([
    //   this.service.getPayPalValue(),
    //   this.service.getVisaValue(),
    //   this.service.getMasterCardValue(),
    //   this.service.getPayValue(),
    //   this.service.getEmail(),
    //   this.service.getPhone(),
    //   this.service.getLocation()
    // ]).subscribe((result) => {
    //   debugger
    //   return {
    //     types: result[0],
    //     departments: result[1]
    //   };
    // }), err => {
    //   debugger
    // };
  }

}
