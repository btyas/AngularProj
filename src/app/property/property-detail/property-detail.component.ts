import { Property } from 'src/app/model/Property';
import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {NgxGalleryOptions, NgxGalleryOrder} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
 public propertyId: number;
 public property = new Property();
 minDate: Date;
 maxDate: Date;

  // tslint:disable-next-line: typedef-whitespace
  constructor(private route: ActivatedRoute , private router : Router,
               private housingService : HousingService     ) { }
               galleryOptions: NgxGalleryOptions[];
               galeeryOptionsDetail : NgxGalleryOptions[];
               galleryImages: NgxGalleryImage[];
  // tslint:disable-next-line: typedef
  ngOnInit() {

       this.minDate = new Date();
       this.maxDate = new Date();

       this.minDate.setDate(this.minDate.getDate() - 4);
       this.maxDate.setDate(this.maxDate.getDate() + 10);

    this.galeeryOptionsDetail = [
      {
          width: '250px',
          height: '150px',
          thumbnailsColumns: 3,
          imageAnimation: NgxGalleryAnimation.Slide

      }
        ];

   //#region
   this.galleryOptions = [
    {
      width: '600px',
      height: '400px',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide
    },
    // max-width 800


    {
      breakpoint: 800,
      width: '100%',
      height: '600px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
    },
    // max-width 400
    {
      breakpoint: 400,
      preview: false
    }
  ];

  this.galleryImages = [
    {
      small: 'assets/Images/plat-Italien-1.jpg',
      medium: 'assets/Images/plat-Italien-1.jpg',
      big: 'assets/Images/plat-Italien-1.jpg'
    },
    {
      small: 'assets/Images/plat-Italien-2.jpg',
      medium: 'assets/Images/plat-Italien-2.jpg',
      big: 'assets/Images/plat-Italien-2.jpg'
    },
    {
      small: 'assets/Images/plat-Italien-3.jpg',
      medium: 'assets/Images/plat-Italien-3.jpg',
      big: 'assets/Images/plat-Italien-3.jpg'
    }
  ];
   //#endregion


    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
          (data: Property) => {
                 this.property = data['prp'];
          }

         );

        }
  // tslint:disable-next-line: typedef
  onSelectNext() {
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
   }

  }
