import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoderComponent } from './loder/loder.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ProductsComponent } from './products/products.component';
import { FashionComponent } from './fashion/fashion.component';
import { DealsComponent } from './deals/deals.component';
import { NewsComponent } from './news/news.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AddWatchComponent } from './add-watch/add-watch.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { WatchService } from './services/watch.service';
import { DataService } from './services/data.service';
import { InMemoryWebApiModule, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './services/user.service';
import { WatchInfoComponent } from './watch-info/watch-info.component';
import { UpdateWatchComponent } from './update-watch/update-watch.component';



@NgModule({
  declarations: [
    AppComponent,
    LoderComponent,
    HeaderComponent,
    BlogComponent,
    ContainerComponent,
    FooterComponent,
    BannerComponent,
    OurServicesComponent,
    ProductsComponent,
    FashionComponent,
    DealsComponent,
    NewsComponent,
    BrandsComponent,
    ProductgridComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    AboutComponent,
    NotfoundComponent,
    AddWatchComponent,
    ForgotpasswordComponent,
    AdminComponent,
    WatchInfoComponent,
    UpdateWatchComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //InMemoryWebApiModule.forRoot(DataService),
    //HttpClientInMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [WatchService,DataService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
