import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ServersComponent} from './servers.component';
import {AuthGuard} from '../shared/guard/auth-guard.service';
import {ServerComponent} from './server/server.component';
import {ServerResolve} from '../shared/guard/server-resolve.service';
import {EditServerComponent} from './edit-server/edit-server.component';
import {DeactivateGuard} from '../shared/guard/deactivate-guard.service';

const routes: Routes = [
  {path: '', component: ServersComponent, canActivateChild: [AuthGuard],
    children: [
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolve}},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [DeactivateGuard]}
    ]},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ServersRoutingModule { }
