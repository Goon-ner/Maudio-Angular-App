import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { DeviceComponent } from './components/device/device.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { ShopComponent } from './pages/shop/shop.component';
import { DevicePageComponent } from './pages/device-page/device-page.component';
import { BasketComponent } from './pages/basket/basket.component';
import {RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRouterModule} from "./routing/app-router/app-router.module";
import {NgOptimizedImage} from "@angular/common";
import { SearchProductsPipe } from './pipes/search-products.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    DeviceComponent,
    DeviceListComponent,
    ShopComponent,
    DevicePageComponent,
    BasketComponent,
    SearchProductsPipe
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
