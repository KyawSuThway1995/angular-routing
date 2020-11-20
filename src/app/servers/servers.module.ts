import {NgModule} from '@angular/core';
import {ServersComponent} from './servers.component';
import {EditServerComponent} from './edit-server/edit-server.component';
import {ServerComponent} from './server/server.component';
import {ServersRoutingModule} from './servers-routing.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ServersComponent,
    EditServerComponent,
    ServerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ServersRoutingModule
  ],
})
export class ServersModule{}
