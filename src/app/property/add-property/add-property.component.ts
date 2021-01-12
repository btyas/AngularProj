import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  SellRent = '1';
  constructor(private route: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  //  this.addPropertyForm.controls.Name.setValue('Default Value');
   setTimeout(() => {
        this.addPropertyForm.controls.Name.setValue('Default Value');
   }, 1000);
  }

  // tslint:disable-next-line: typedef
  onBack()
  {
    this.route.navigate(['/']);
  }

  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm)
  {
    console.log('Congrats, from Submit');
    console.log(form);
  }
}
