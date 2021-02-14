import { IPropertyBase } from './../../model/IpropertyBase';

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})

export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs', {static: false}) formTabs: TabsetComponent;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  bhkProperty = [1, 2 , 3, 4];

  propertyView: IPropertyBase = {
    Id : null,
    Name: ' ',
    Price: null,
    SellRent : null,
    PType: null,
    FType : null,
    BHK: null,
    BuildArea: null,
    City : null,
    RTM: null
  };

  constructor(private route: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  //  this.addPropertyForm.controls.Name.setValue('Default Value');

  }

  // tslint:disable-next-line: typedef
  onBack()
  {
    this.route.navigate(['/']);
  }


  // tslint:disable-next-line: typedef
  onSubmit()
  {
    console.log('Congrats, form Submitted');
    console.log('SellRent=' + this.addPropertyForm.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);
  }
    // tslint:disable-next-line: typedef
  selectTab(tabId: number){
    this.formTabs.tabs[tabId].active = true;
  }
}
