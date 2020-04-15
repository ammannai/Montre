import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddWatchComponent } from './add-watch/add-watch.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
   { path: "", component : HomeComponent},
   {path:"login", component : LoginComponent},
   {path:"signup", component :SignupComponent},
   {path:"contact", component : ContactComponent},
   {path:"about",  component : AboutComponent},
   {path :"addWatch", component : AddWatchComponent},
   {path :"forgot", component : ForgotpasswordComponent},
   {path : "products" , component : ProductsComponent},
   {path:"**" , component : NotfoundComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }