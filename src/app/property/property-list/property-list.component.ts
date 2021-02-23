import { IPropertyBase } from './../../model/IpropertyBase';
import { HousingService } from './../../services/housing.service';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  Properties: IPropertyBase[];

  constructor(private route: ActivatedRoute, private housingService: HousingService)  { }

  ngOnInit(): void {

   if (this.route.snapshot.url.toString()){
           this.SellRent = 2;
      }

   this.housingService.getAllProperties(this.SellRent)
          .subscribe(data => {
            this.Properties = data;
            const newProperty = JSON.parse(localStorage.getItem('newProp'));
              if (newProperty.SellRent === this.SellRent) {
                this.Properties = [newProperty, ...this.Properties];

              }

            console.log(data);
            console.log(this.route.snapshot.toString());
          },
           error => {
             console.log('httperror :');
             console.log(error);
           }
          );

  }

}
