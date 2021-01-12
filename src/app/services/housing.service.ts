import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { IProperty } from '../property/property-list/IPropertyInterface';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) {


  }
  getAllPrperties(SellRent: number): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(

      map(data => {
        const propetiesArray: Array<IProperty> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            propetiesArray.push(data[id]);
          }
        }
        return propetiesArray;
      })
    );

  }
}
