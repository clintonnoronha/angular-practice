import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';

export const pageResolver: ResolveFn<any> = (route) => {
  const pageNumber = route.paramMap.get('pageNumber');
  // Generally, we will resolve some API call before loading the route
  return of({
    pageNumber: pageNumber,
    pageName: 'Router Outlet',
  });
};
