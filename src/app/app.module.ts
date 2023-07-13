import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TableModule } from 'primeng/table';
//import { GridModule, ResizeService } from '@syncfusion/ej2-angular-grids';
//import { OrderProductComponent } from './order-product/order-product.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
   TableModule,
    RouterModule.forRoot(Routes)
    // RouterModule.forRoot([
    //   { path: '', component: OrderProductComponent },
    // ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent
  //  OrderProductComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
