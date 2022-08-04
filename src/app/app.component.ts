import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'myapp';



  images = [
    {
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/26/d3745533-9b5e-4c4b-81cb-dd60be8639381656221544161-Modern-Sarees_Desk.jpg', 
      imageAlt: 'car-1',
 
    },
    {
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/16/5dbfe05b-cf14-4bae-b6af-1ce144bfa18c1652718466927-Bestselling-Styles_Desk.jpg',
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/5b4e9f29-f0ef-41bf-be9d-83f468c823cc1654006815381-Tees---Tops_DK.jpg', 
      imageAlt: 'car-1',
    },
    {
       
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/7b1da839-34a4-4e78-b5b5-e18af304e3bd1654099311017-Top-Kurta-Sets_Desk.jpg',
      imageAlt: 'car-1',
    },
    {
       
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/7feef02b-0072-4c1b-b83d-4e46a5d93c6b1649530621162-Sangria_Desk_Banner.jpg',
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/1768e5bd-41a3-4373-b583-eafb68c41f401654006978408-Indian-Wear_DK.jpg', 
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg', 
      imageAlt: 'car-1',
    },
    {
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/a53b7f7e-37ab-4319-a1b4-5d9c0cca68601650180659343-Lancer_Desk.jpg', 
      imageAlt: 'car-1',
    },
    {
       
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/553384ff-be1f-4272-81d6-6f9e43fe5fe51654097949853-Dresses_Desk.jpg',
      imageAlt: 'car-1',
    },
    {
       
      imageSrc:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/735e64d7-b478-4c04-9a2d-0c93ae257cfc1654097850282-Kurtas-Sets_Desktop.jpg',
      imageAlt: 'car-1',
    },
  ]

  OnActive(){
    window.scroll(0,0);
  }
}


