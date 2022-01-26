import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { weatherForeCastInfo } from '../models/weather-forecast-info.model';
import { WeatherInfoDataService } from './../services/weather-info.data.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
})
export class WeatherForecastComponent implements OnInit {
  data: weatherForeCastInfo;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private weatherInfoDataService: WeatherInfoDataService
  ) {}
  ngOnInit(): void {
    const location = this.activatedRoute.snapshot.paramMap.get('location');
    this.getForeCastInformation(location);
  }

  /**
   * This method is used to navigate back.
   */
  navigateBack(): void {
    this.router.navigate(['/']);
  }

  /**
   * The method is used to fetch last five weather forecast information.
   * @param location string
   */
  getForeCastInformation(location: string): void {
    this.weatherInfoDataService
      .getWeatherForeCastInformation(location)
      .subscribe({
        next: (res) => {
          res.list = res.list.filter((data) =>
            data.dt_txt.includes('12:00:00')
          );
          this.data = res;
        },
        error: () => alert('Invalid Zip Code.'),
      });
  }
}
