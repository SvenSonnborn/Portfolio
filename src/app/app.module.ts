import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ImprintComponent } from './imprint/imprint.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';




@NgModule({
  declarations: [
    AppComponent,
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
    ImprintComponent,
    DataprotectionComponent,
    SidebarComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [InViewPortService, ContactService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
