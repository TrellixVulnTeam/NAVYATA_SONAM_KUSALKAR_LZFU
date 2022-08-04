import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})

export class WomenComponent {
  title = 'myapp';

  images = [
 
    {
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/7feef02b-0072-4c1b-b83d-4e46a5d93c6b1649530621162-Sangria_Desk_Banner.jpg',
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/a20271c6-249f-480b-bcc7-1b150516e54e1651599573998-Dressberry_Desk.jpg', 
      imageAlt: 'car-1',
    },
    {
       
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3f6d1e2a-5ef6-4921-be5d-443a11b11d801651599573985-Dresses_Desk.jpg',
      imageAlt: 'car-1',
    },
    {
       
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/bc89bda3-e7dc-42fc-91f8-e380f36303c11651599573964-Tops---Tees_Desk.jpg',
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/1377cd42-3e4c-4cd7-ae0e-1719e81ff1db1650181498574-Formal-Footwear_Desk.jpg', 
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/38f37101-f335-44be-af8f-5d53de15c75e1649530843725-Casual---Sports-Shoes_Desk--1-.jpg', 
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/735e64d7-b478-4c04-9a2d-0c93ae257cfc1654097850282-Kurtas-Sets_Desktop.jpg', 
      imageAlt: 'car-1',
    },
    {
       
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/7b1da839-34a4-4e78-b5b5-e18af304e3bd1654099311017-Top-Kurta-Sets_Desk.jpg',
      imageAlt: 'car-1',
    },
 
  ]
  OnActive(){
    window.scroll(0,0);
  }
}
