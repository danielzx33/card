import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { EncryptedPaymentService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [EncryptedPaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
