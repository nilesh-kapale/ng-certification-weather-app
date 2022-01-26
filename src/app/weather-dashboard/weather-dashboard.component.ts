import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
})
export class WeatherDashboardComponent implements OnInit {
  zipCodeList: string[];
  constructor(private storageService: StorageService) {
    this.zipCodeList = [];
  }
  ngOnInit(): void {
    this.zipCodeList = this.storageService.getStoredLocationList();
  }

  onLocationAdd(zipCode: string): void {
    this.zipCodeList.push(zipCode);
  }

  onCloseInfo(zipCode: string): void {
    this.storageService.removeLocation(zipCode);
    this.zipCodeList = this.storageService.getStoredLocationList();
  }
}
