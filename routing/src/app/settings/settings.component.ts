import { Component, DoCheck, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from '../shared/constants.service';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-settings',
  imports: [ProfileComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements DoCheck {
  router = inject(Router);
  constants = inject(ConstantsService);
  goToProfileBtnText: string = '';

  constructor() {
    this.checkUrl();
  }

  ngDoCheck(): void {
    this.checkUrl();
  }

  goToProfilePage(): void {
    if (this.goToProfileBtnText === this.constants.GO_TO_PROFILE) {
      // navigate to /setting/profile
      this.router.navigate(['settings', 'profile']);
      this.goToProfileBtnText = this.constants.GO_BACK;
    } else {
      this.router.navigateByUrl('/settings');
      this.goToProfileBtnText = this.constants.GO_TO_PROFILE;
    }
  }

  checkUrl(): void {
    if (this.router.url.includes('settings/profile'))
      this.goToProfileBtnText = this.constants.GO_BACK;
    else this.goToProfileBtnText = this.constants.GO_TO_PROFILE;
  }
}
