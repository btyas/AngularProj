import { HousingService } from './../../services/housing.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Property } from 'src/app/model/Property';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements  Resolve<Property> {

constructor(private router: Router, private housingService : HousingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Property | Observable<Property> | Promise<Property> {
    const propId = route.params['id']
    return this.housingService.getProperty(+propId).pipe(
      catchError(error => {
                this.router.navigate(['/']);
                 return of(null);
      })

    );
  }

}
