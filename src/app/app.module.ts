import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { InViewPortService } from './in-view-port.service';
import { InViewDirective } from './in-view.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    SkillsComponent,
    WorkComponent,
    AboutmeComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    AngularComponent,
    JavascriptComponent,
    InViewDirective,
  ],
  
  imports: [BrowserModule, AppRoutingModule],
  providers: [InViewPortService],
  bootstrap: [AppComponent],
})
export class AppModule {}
