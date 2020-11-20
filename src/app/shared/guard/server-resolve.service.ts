import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ServerService} from '../services/server.service';

@Injectable({
  providedIn: 'root'
})
export class ServerResolve implements Resolve<{id: number, name: string, status: string}>{

  constructor(private serverSrv: ServerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ id: number; name: string; status: string }> | Promise<{ id: number; name: string; status: string }> | { id: number; name: string; status: string } {
    const id = route.params['id'];
    return this.serverSrv.findById(id);
  }
}
