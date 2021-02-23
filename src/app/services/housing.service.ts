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
  getAllProperties(SellRent: number): Observable<IPropertyBase[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
      const propertiesArray: Array<IPropertyBase> = [];
      const localProperties = JSON.parse(localStorage.getItem('newProp'));

      if (localProperties) {
        for (const id in localProperties) {
          if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
            propertiesArray.push(localProperties[id]);
          }
        }
      }

      for (const id in data) {
        if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
          propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
      })
    );


  }



  addProperty(property: Property) {
    let nexProp = [property];

    if (localStorage.getItem('newProp')) {
      nexProp = [property, ...JSON.parse(localStorage.getItem('newProp'))];
    }

    localStorage.setItem('newProp', JSON.stringify(property));
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
