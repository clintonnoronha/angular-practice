import { inject } from '@angular/core';
import { ConstantsService } from './shared/constants.service';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';

export const authGuard = () => {
  const constants = inject(ConstantsService);
  const router = inject(Router);

  return constants.CURRENT_USER$.pipe(
    filter((user) => !!user[0]),
    map((user) => {
      if (user[0]?.role !== constants.ADMIN) {
        router.navigate(['dashboard']);
        return false;
      }
      return true;
    }),
  );
};
