import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EncryptedCard } from 'src/Model/EncryptedCard';

@Injectable({
  providedIn: 'root'
})
export class EncryptedPaymentService {
  constructor(private http: HttpClient) { }

  payment(card: EncryptedCard){
    console.log(card)
      this.http.post("https://localhost:5001/api/payment", {card}).subscribe(value => {        
    console.log(value)}, error => console.log(error), () => {           
});
  }
}