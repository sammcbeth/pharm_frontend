import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { FormsModule } from '@angular/forms';
import { HistoricalComponent } from './historical/historical.component';
import { HomeComponent } from './main/home/home.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';
import { BackgroundComponent } from './background/background.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'upcoming',
    component: MainComponent
  },
  {
    path: 'historical',
    component: HistoricalComponent
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'background',
    component: BackgroundComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HistoricalComponent,
    DisclaimerComponent,
    PricingComponent,
    LoginComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MainModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
