/**
 * @author Nilesh Kapale
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherInfo } from '../models/weather-info.model';
import { weatherForeCastInfo } from './../models/weather-forecast-info.model';

/**
 * This service class fetch the weather information from server.
 *
 */
@Injectable({ providedIn: 'root' })
export class WeatherInfoDataService {
  API_URL = 'https://api.openweathermap.org/data/2.5/';
  APP_ID = '0050b6af632d87a017cae84a18c7c1fa';
  constructor(private http: HttpClient) {}

  /**
   * this method is used to fetch weather information.
   *
   * @param location string
   * @returns Observable<Info>
   */
  getWeatherInfo(location: string): Observable<WeatherInfo> {
    return this.http.get<WeatherInfo>(
      `${this.API_URL}/weather?appid=${this.APP_ID}&zip=${location},in`
    );
  }

  /**
   * This method is used to fetch last five days weather information.
   *
   * @param location string
   * @returns Observable<Info> forecast
   */
  getWeatherForeCastInformation(
    location: string
  ): Observable<weatherForeCastInfo> {
    return this.http.get<weatherForeCastInfo>(
      `${this.API_URL}/forecast?appid=${this.APP_ID}&zip=${location},in`
    );
  }
}
