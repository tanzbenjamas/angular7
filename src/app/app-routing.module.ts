import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { InformationComponent } from './information/information.component';
import { TranferComponent } from './tranfer/tranfer.component';
import { BackupComponent } from './backup/backup.component';
import { SettingComponent } from './setting/setting.component';
import { HandbookComponent } from './handbook/handbook.component';
import { AboutComponent } from './about/about.component';
import { UpdateComponent } from './update/update.component';

const appRoutes: Routes = [
  { path: '', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'first', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'second', component: SecondComponent, data: { title: 'Second Component' } },
  { path: 'information', component:InformationComponent,data:{ title: 'Information Component'}},
  { path: 'tranfer', component:TranferComponent,data:{ title: 'Tranfer Component'}},
  { path: 'backup', component:BackupComponent,data:{ title: 'Backup Component'}},
  { path: 'setting', component:SettingComponent,data:{ title: 'Setting Component'}},
  { path: 'handbook', component:HandbookComponent,data:{ title: 'Handbook Component'}},
  { path: 'about', component:AboutComponent,data:{ title: 'About Component'}},
  { path: 'update', component:UpdateComponent,data:{ title: 'Update Component'}},





];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
