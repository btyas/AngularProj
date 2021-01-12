import { HousingService } from './../../services/housing.service';

import { Component, OnInit } from '@angular/core';
import { IProperty } from './IPropertyInterface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  Properties: IProperty[];

  constructor(private route: ActivatedRoute, private housingService: HousingService)  { }

  ngOnInit(): void {

   if (this.route.snapshot.url.toString()){
           this.SellRent = 2;
      }

   this.housingService.getAllPrperties(this.SellRent)
          .subscribe(data => {
            this.Properties = data;
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