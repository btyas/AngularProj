import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
 public propertyId: number;
  // tslint:disable-next-line: typedef-whitespace
  constructor(private route: ActivatedRoute , private router : Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.propertyId =  Number( this.route.snapshot.params.id);
    this.route.params.subscribe(

       (params) => {
         this.propertyId = +params.id;
       }
    );

  }

  // tslint:disable-next-line: typedef
  onSelectNext() {
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }
}
