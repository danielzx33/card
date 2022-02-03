import { Component, OnInit } from '@angular/core';
import AdyenCheckout from '@adyen/adyen-web';
import '@adyen/adyen-web/dist/adyen.css';
import { EncryptedPaymentService } from './app.service';
import { EncryptedCard } from 'src/Model/EncryptedCard';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  constructor(){
   
  }
  ngOnInit(): void {
      this.initAdyen()
  }

 // import AdyenCheckout from '@adyen/adyen-web';
  async initAdyen(){
    const configuration = {
      locale: "en_US",
      environment: "test",
      clientKey: "test_ZP2P5EL2FVAEZCQVICZGPUCEFQ3KVTUW",
      onChange: this.handleOnChange
  };
    const checkout = await AdyenCheckout(configuration);
    const card = checkout.create('card').mount('#customCard-container');
  }

  handleOnChange(state: any, component: any) {
    if(state.isValid)
    {

     let card:  EncryptedCard = {
        name : "nome daniel",
        cardNumber: state.data.paymentMethod.encryptedCardNumber,
        month: state.data.paymentMethod.encryptedExpiryMonth,
        year: state.data.paymentMethod.encryptedExpiryYear,
        cvv: state.data.paymentMethod.encryptedSecurityCode
      }
 
     console.log(card)
    }
   // state.isValid // True or false. Specifies if all the information that the shopper provided is valid.
  //  state.data // Provides the data that you need to pass in the `/payments` call.
   // component // Provides the active component instance that called this event.
}
  title = 'CreditCard';
}
