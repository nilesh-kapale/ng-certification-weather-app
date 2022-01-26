import { Component, EventEmitter, Output } from '@angular/core';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'add-weather-location',
  templateUrl: './add-weather-location.component.html',
})
export class AddLocationComponent {
  zipCode: string;
  @Output() addedZipCode: EventEmitter<string> = new EventEmitter();
  constructor(private storageService: StorageService) {
    this.zipCode = '';
  }

  /**
   * This method is used to add Location in local storage.
   */
  addLocation(): void {
    const isStored = this.storageService.store(this.zipCode);
    if (isStored) {
      this.addedZipCode.emit(this.zipCode);
    }
    this.zipCode = '';
  }
}
