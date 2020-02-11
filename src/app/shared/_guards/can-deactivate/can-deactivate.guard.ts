import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ICanDeactivateGuard } from './ican-deactivate.guard';

@Injectable({ providedIn: 'root' })
export class CanDeactivateGuard implements CanDeactivate<ICanDeactivateGuard> {

  constructor(
  ) { }

  canDeactivate(
    component: ICanDeactivateGuard,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    return component.ngCanDeactivate();
    
  }
}
