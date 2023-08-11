import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserRoutingModule } from './user/user-routing.module';

import { PropertyRoutingModule } from './property/property-routing.module';
import { UserModule } from './user/user.module';
import { PropertyModule } from './property/property.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NavigationComponent, FooterComponent, HomeComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    PropertyRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [NavigationComponent, FooterComponent, UserModule, PropertyModule, UserModule],
})
export class CoreModule {}
