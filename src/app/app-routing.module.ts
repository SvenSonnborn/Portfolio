import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AngularComponent } from './angular/angular.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { LandingComponent } from './landing/landing.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'work', component: WorkComponent },
  { path: 'About me', component: AboutmeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', component: HomeComponent },
  { path: 'angular', component: AngularComponent},
  { path: 'javascript', component: JavascriptComponent},
  { path: 'imprint', component: ImprintComponent},
  { path: 'dataprotection', component: DataprotectionComponent},


];
@NgModule({
  imports: [  RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'corrected',
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
}),
],
  exports: [RouterModule],
})
export class AppRoutingModule { }
