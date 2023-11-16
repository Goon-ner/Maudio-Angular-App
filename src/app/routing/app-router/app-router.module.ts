import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "../../pages/main/main.component";
import {ShopComponent} from "../../pages/shop/shop.component";
import {BasketComponent} from "../../pages/basket/basket.component";
import {DevicePageComponent} from "../../pages/device-page/device-page.component";
import {LoginPageComponent} from "../../pages/login-page/login-page.component";
import {AuthPageComponent} from "../../pages/auth-page/auth-page.component";


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'auth', component: AuthPageComponent},
  {path: ':id', component: DevicePageComponent},
  {path: 'shop/:id', component: DevicePageComponent},



]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRouterModule { }
