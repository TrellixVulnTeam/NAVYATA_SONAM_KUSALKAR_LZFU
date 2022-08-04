import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-living',
  templateUrl: './living.component.html',
  styleUrls: ['./living.component.css']
})
export class LivingComponent {
  title = 'myapp';

  images = [

    {
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/8/eff01060-f706-468d-b97c-95cdf43174f91528443826867-Desktop-Home-Banner.jpg',
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://cdn.shopify.com/s/files/1/0099/2867/1291/files/Carousal_Banners_Generic_-1280_x_400-Desktop-03_1400x.progressive.jpg?v=1636538046', 
      imageAlt: 'car-1',
    },
    {
       
      imageSrc:'https://cdn.shopify.com/s/files/1/0099/2867/1291/files/Website_Carousel_Banners-1280_x_400-Desktop-01_1400x.progressive.jpg?v=1654845316',
      imageAlt: 'car-1',
    },
    {
       
      imageSrc:'https://cdn.shopify.com/s/files/1/0099/2867/1291/files/Website_Carousel_Banners-1280_x_400-Desktop-02_1400x.progressive.jpg?v=1654845402',
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://cdn.shopify.com/s/files/1/0099/2867/1291/files/Website_Carousel_Banners-1280_x_400-Desktop-06_1400x.progressive.jpg?v=1654846011', 
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://cdn.shopify.com/s/files/1/0099/2867/1291/files/Website_Carousel_Banners-1280_x_400-Desktop-04_1400x.progressive.jpg?v=1654845898', 
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://cdn.shopify.com/s/files/1/0099/2867/1291/files/Website_Carousel_Banners-1280_x_400-Desktop-05_1400x.progressive.jpg?v=1654845952', 
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://cdn.shopify.com/s/files/1/0099/2867/1291/files/Carousal_Banners_Generic_-1280_x_400-Desktop-02_1400x.progressive.jpg?v=1636537953', 
      imageAlt: 'car-1',
    },
 
  ]

}