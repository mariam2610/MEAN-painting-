import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { FormsModule } from '@angular/forms';
//import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrdersComponent } from './orders/orders.component';
import { HeaderComponent } from './header/header.component';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { CartServices } from './cart.service';
import { NewOrderServices } from './neworder.service';
import { ProductServices } from './product.service';
import { UserServices } from './user.service';
import { ArtistComponent } from './artist/artist.component';
import { FooterComponent } from './footer/footer.component';
import { MessagesComponent } from './messages/messages.component';
import { ProductsComponent } from './products/products.component';
//import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductdetailsComponent,
    CartdetailsComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    HeaderComponent,
    CategorypageComponent,
    ArtistComponent,
    FooterComponent,
    MessagesComponent,
    ProductsComponent,
  //  HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    //FormBuilder
  ],
  providers: [ProductServices,CartServices,NewOrderServices,UserServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
