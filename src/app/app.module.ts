import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddLocationComponent } from './add-weather-location/add-weather-location.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherLocationInformationComponent } from './weather-location-information/weather-location-information.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    AddLocationComponent,
    WeatherDashboardComponent,
    WeatherLocationInformationComponent,
    WeatherForecastComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
