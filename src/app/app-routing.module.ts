import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { FooterComponent } from './footer/footer.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { BeautyComponent } from './beauty/beauty.component';
import { LivingComponent } from './living/living.component';
import { WomenCardComponent } from './women-card/women-card.component';
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


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path : 'women', component:WomenComponent},
  {path : 'men', component:MenComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'kids', component:KidsComponent},
  {path: 'beauty', component:BeautyComponent},
  {path: 'living', component:LivingComponent},
  {path: 'women-card', component:WomenCardComponent},
  {path: 'women-detail', component:WomenDetailComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'sample', component:SampleComponent},
  {path: 'men-detail', component:MenDetailComponent},
  {path: 'men-card', component:MenCardComponent},
  {path: 'kids-detail', component:KidsDetailComponent},
  {path: 'kids-card', component:KidsCardComponent},
  {path: 'beauty-detail', component:BeautyDetailComponent},
  {path: 'beauty-card', component:BeautyCardComponent},
  {path: 'living-detail', component:LivingDetailComponent},
  {path: 'living-card', component:LivingCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routingComponents = 
 [WomenComponent,MenComponent,HomeComponent,
  FooterComponent,KidsComponent,BeautyComponent,
  LivingComponent,WomenCardComponent,WomenDetailComponent,
  SignupComponent,SampleComponent,MenDetailComponent,
  MenCardComponent,KidsDetailComponent,KidsCardComponent,
  BeautyDetailComponent,BeautyCardComponent,LivingDetailComponent, LivingCardComponent ]