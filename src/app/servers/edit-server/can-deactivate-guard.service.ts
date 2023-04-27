import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";

export interface CanComponentDeactivate {
  canDeactivateM: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component:CanComponentDeactivate,
                currentRoute:ActivatedRouteSnapshot,
                currentState:RouterStateSnapshot,
                nextState?:RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivateM();
  }
}
