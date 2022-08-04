import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class  BeautyComponent {
  title = 'myapp';
  images = [

    {
       
      imageSrc:'https://cdn.shopify.com/s/files/1/0014/3514/0183/files/LFW_HP_Banner_desktop_601b3a43-26b6-47b5-8fdf-c543a301fd0b_1400x.gif?v=1648015311',
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://cdn.shopify.com/s/files/1/0014/3514/0183/files/HP_desktop_banner_Setting_spray_copy_1400x.jpg?v=1654071800', 
      imageAlt: 'car-1',
    },
  
    {
       
      imageSrc:'https://cdn.shopify.com/s/files/1/0014/3514/0183/files/1169x511_Skin_pro_v6_1400x.jpg?v=1638537664',
      imageAlt: 'car-1',
    },
 
    {
      imageSrc:'https://images-static.nykaa.com/uploads/610da28b-8d59-4ca3-9757-0832a51ebd98.jpg?tr=w-1200,cm-pad_resize', 
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://cdn.shopify.com/s/files/1/0014/3514/0183/files/HP_Bridal_desktop_1400x.jpg?v=1649316826', 
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://images-static.nykaa.com/uploads/90aae2de-70a9-44fe-9f6a-975a19eb985a.jpg?tr=w-1200,cm-pad_resize',
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://images-static.nykaa.com/uploads/a1ef9e85-1541-4b47-b8d7-1da25971e1a2.jpg?tr=w-1200,cm-pad_resize', 
      imageAlt: 'car-1',
    },
    {
       
      imageSrc:'https://images-static.nykaa.com/uploads/cb1c75cf-f615-437a-a33c-921ddac0dabf.gif?tr=w-1200,cm-pad_resize',
      imageAlt: 'car-1',
    },
    {
       
      imageSrc:'https://images-static.nykaa.com/uploads/71925e45-b8da-442a-ba58-0944b5769b00.jpg?tr=w-1200,cm-pad_resize',
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://images-static.nykaa.com/uploads/06e39650-b661-45d7-89a8-e3ea44a7b1ea.jpg?tr=w-1200,cm-pad_resize', 
      imageAlt: 'car-1',
    },
  
  ]

}
