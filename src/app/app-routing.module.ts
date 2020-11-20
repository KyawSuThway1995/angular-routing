import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserComponent} from './users/user/user.component';
import {AuthGuard} from './shared/guard/auth-guard.service';

const routes: Routes  = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'servers', loadChildren: () => import('./servers/servers.module').then(module => module.ServersModule)},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard],
    children: [
      {path: ':id/:name', component: UserComponent}
    ]},
  {path: '**', component: PageNotFoundComponent, data: {message: 'Page Not Found!!!!', error: '404 Not Found'}},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
