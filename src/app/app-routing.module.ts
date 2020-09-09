import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from "./homepage/homepage.component";
import { CartdetailsComponent } from "./cartdetails/cartdetails.component";
//import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { OrdersComponent } from "./orders/orders.component";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { CategorypageComponent } from "./categorypage/categorypage.component";
import { ArtistComponent } from './artist/artist.component';
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
  { path:'',redirectTo:'/homepage',pathMatch:'full' },
  { path:'homepage',component:HomepageComponent },
  { path:'cartdetails',component:CartdetailsComponent },
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'orders',component:OrdersComponent },
  { path:'productdetails/:id',component:ProductdetailsComponent },
  { path:'categorypage/:id',component:CategorypageComponent},
  { path: 'artist/:id', component:ArtistComponent },
  { path:'products',component:ProductsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
