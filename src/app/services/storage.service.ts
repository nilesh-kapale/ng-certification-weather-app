/**
 * @author Nilesh Kapale
 */
import { Injectable } from '@angular/core';

/**
 * This service class provides storage facility for entered locations.
 *
 */
@Injectable({ providedIn: 'root' })
export class StorageService {
  private locationList: string[];
  constructor() {
    this.locationList = this.getStoredLocationList();
  }

  /**
   * This method is used to update location list.
   *
   * @param location string
   */
  store(location: string): boolean {
    let isStored = true;
    if (!this.isExist(location)) {
      this.locationList.push(location);
      this.update();
    } else {
      isStored = false;
    }
    return isStored;
  }

  /**
   * This method is used to remove given location from List.
   * @param location string
   */
  removeLocation(location: string): void {
    this.locationList = this.locationList.filter((loc) => loc !== location);
    this.update();
  }

  /**
   * This method is used to check entered location already exist on in list or not.
   *
   * @param location string
   * @returns boolean
   */
  private isExist(location: string): boolean {
    return this.locationList.indexOf(location) > -1;
  }

  /**
   * This method is used to update locations array in local storage.
   */
  private update(): void {
    localStorage.setItem('locations', JSON.stringify(this.locationList));
  }

  /**
   * This method returns stored location on local storage list.
   *
   * @returns location list.
   */
  getStoredLocationList(): string[] {
    let locationList = localStorage.getItem('locations');
    return !!locationList ? JSON.parse(locationList) : [];
  }
}
