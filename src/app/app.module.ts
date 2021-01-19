import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { InformationComponent } from './information/information.component';
import { TranferComponent } from './tranfer/tranfer.component';
import { BackupComponent } from './backup/backup.component';
import { SettingComponent } from './setting/setting.component';
import { HandbookComponent } from './handbook/handbook.component';
import { AboutComponent } from './about/about.component';
import { UpdateComponent } from './update/update.component';




@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FirstComponent,
    SecondComponent,
    MainNavComponent,
    InformationComponent,
    TranferComponent,
    BackupComponent,
    SettingComponent,
    HandbookComponent,
    AboutComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
