import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselComponent } from './carousel/carousel.component';
import { WomenCarouselComponent } from './women-carousel/women-carousel.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenCarouselComponent } from './men-carousel/men-carousel.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { KidsComponent } from './kids/kids.component';
import { KidsCarouselComponent } from './kids-carousel/kids-carousel.component';
import { BeautyComponent } from './beauty/beauty.component';
import { BeautyCarouselComponent } from './beauty-carousel/beauty-carousel.component';
import { LivingComponent } from './living/living.component';
import { WomenCardComponent } from './women-card/women-card.component';
import { WomenCardCarouselComponent } from './women-card-carousel/women-card-carousel.component';
import { WomenDetailComponent } from './women-detail/women-detail.component';
import { SignupComponent } from './signup/signup.component';
import { SampleComponent } from './sample/sample.component';
import { MenDetailComponent } from './men-detail/men-detail.component';
import { MenCardComponent } from './men-card/men-card.component';
import { KidsDetailComponent } from './kids-detail/kids-detail.component';
import { KidsCardComponent } from './kids-card/kids-card.component';
import { BeautyDetailComponent } from './beauty-detail/beauty-detail.component';
import { BeautyCardComponent } from './beauty-card/beauty-card.component';
import { LivingDetailComponent } from './living-detail/living-detail.component';
import { LivingCardComponent } from './living-card/living-card.component';







@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,  
    routingComponents, 
    WomenCarouselComponent, 
    HomeComponent, 
    FooterComponent, 
    MenCarouselComponent, 
    HomeCarouselComponent,
    KidsComponent, 
    KidsCarouselComponent, 
    BeautyComponent, 
    BeautyCarouselComponent, LivingComponent, WomenCardComponent,
     WomenCardCarouselComponent, WomenDetailComponent, SignupComponent, SampleComponent, MenDetailComponent, MenCardComponent, KidsDetailComponent, KidsCardComponent, BeautyDetailComponent, BeautyCardComponent, LivingDetailComponent, LivingCardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
