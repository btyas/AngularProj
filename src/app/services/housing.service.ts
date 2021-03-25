import { environment } from './../../environments/environment';
import { IPropertyBase } from './../model/IpropertyBase';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Property } from '../model/Property';
import { IProperty } from '../model/Iproperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) {

  }

  getAllCities() : Observable<string[]> {
    return this.http.get<string[]>('http://localhost:52137/api/City');
  }

  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray => {
       //  throw new Error('Somme error');
        return propertiesArray.find(p => p.Id === id);
      })
    );
  }

  getAllProperties(SellRent? : number): Observable<Property[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
      const propertiesArray: Array<Property> = [];
      const localProperties = JSON.parse(localStorage.getItem('newProp'));

      if (localProperties) {
        for (const id in localProperties) {
          if (SellRent){
          if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
            propertiesArray.push(localProperties[id]);
          }
         } else {
             propertiesArray.push(localProperties[id]);
        }
      }

      }

      for (const id in data) {
        if (SellRent) {
           if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
              propertiesArray.push(data[id]);
        }
      }else {
                     propertiesArray.push(data[id]);
      }
    }
      return propertiesArray;
      })
    );

        return this.http.get<Property[]>('data/properties.json');
  }



  addProperty(property: Property) {
    let newProp = [property];

    if (localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp'))];
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
  }


  newPropID() {
    if (localStorage.getItem('PID'))
    {
      localStorage.setItem('PID', String(+localStorage.getItem('PID')+1));
      return +localStorage.getItem('PID');

    } else {
      localStorage.setItem('PID','101');
      return 101;
    }
  }
}
