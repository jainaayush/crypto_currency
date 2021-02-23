import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  // payData = ['PayPal', 'visa', 'mastercard', 'pay'];
  
  private payPal: BehaviorSubject<string>;
  private visa: BehaviorSubject<string>;
  private masterCard: BehaviorSubject<string>;
  private pay: BehaviorSubject<string>;
  private email: BehaviorSubject<string>;
  private phone: BehaviorSubject<string>;
  private location: BehaviorSubject<string>;

  constructor() {
    this.payPal = new BehaviorSubject<string>('PayPal');
    this.visa = new BehaviorSubject<string>('Visa');
    this.masterCard = new BehaviorSubject<string>('mastercard');
    this.pay = new BehaviorSubject<string>('pay');
    this.email = new BehaviorSubject<string>('invision@gmail.com');
    this.phone = new BehaviorSubject<string>('987654321');
    this.location = new BehaviorSubject<string>('New York, NY');
  }

  // getTotalValue() {
  //   debugger
  //   let val = this.getPayPalValue();
  //   let valu = this.getVisaValue();
  //   let value = this.getMasterCardValue();

  //   return forkJoin([val, valu, value]);
  // }

  getPayPalValue(): Observable<string> {
    return this.payPal.asObservable();
  }

  getVisaValue(): Observable<string> {
    return this.visa.asObservable();
  }

  getMasterCardValue(): Observable<string> {
    return this.masterCard.asObservable();
  }

  getPayValue(): Observable<string> {
    return this.pay.asObservable();
  }

  getEmail(): Observable<string> {
    return this.email.asObservable();
  }

  getPhone(): Observable<string> {
    return this.phone.asObservable();
  }

  getLocation(): Observable<string> {
    return this.location.asObservable();
  }
  
  setValue(newValue): void {
    this.payPal.next(newValue);
    this.visa.next(newValue);
    this.masterCard.next(newValue);
    this.pay.next(newValue);
  }

}
