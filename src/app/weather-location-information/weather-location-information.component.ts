import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherInfo } from '../models/weather-info.model';
import { WeatherInfoDataService } from './../services/weather-info.data.service';

@Component({
  selector: 'weather-location-information',
  templateUrl: './weather-location-information.component.html',
})
export class WeatherLocationInformationComponent {
  isError: boolean;
  weatherInfo: WeatherInfo;
  private _zipCode: string;
  @Output() close: EventEmitter<string> = new EventEmitter();
  constructor(private weatherInfoDataService: WeatherInfoDataService) {
    this.isError = false;
  }
  @Input()
  set zipCode(zipCode: string) {
    this._zipCode = zipCode;
    this.getWeatherInfo();
  }

  get zipCode() {
    return this._zipCode;
  }

  /**
   * This method fetch the current weather information.
   */
  getWeatherInfo(): void {
    this.weatherInfoDataService.getWeatherInfo(this.zipCode).subscribe({
      next: (res) => (this.weatherInfo = res),
      error: () => (this.isError = true),
    });
  }
}
