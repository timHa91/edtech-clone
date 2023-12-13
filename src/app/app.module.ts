import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeroComponent } from './home/hero/hero.component';
import { CourseListComponent } from './home/course-list/course-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownDirective } from './directives/dropdown.directive';
import { HoverUnderlineDirective } from './directives/hover-underline.directive';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HeroComponent,
    CourseListComponent,
    DropdownDirective,
    HoverUnderlineDirective,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
