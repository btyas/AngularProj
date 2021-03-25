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
  properties: IPropertyBase[];
  Today = Date();
  city ='';
  SearchCity='';
  SortParam ='';
  constructor(private route: ActivatedRoute, private housingService: HousingService)  {

  }
  SortSearchClear()
  {
    this.SearchCity ='';
    this.city ='';
  }
  SortSearch()
  {
    this.SearchCity = this.city;
  }
  ngOnInit(): void {

   if (this.route.snapshot.url.toString()){
           this.SellRent = 2;
      }

      this.housingService.getAllProperties(this.SellRent).subscribe(
        data => {
        this.properties = data;
        console.log(data);
      }
    );
         }

}
