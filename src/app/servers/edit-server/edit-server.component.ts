import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from '../../shared/services/server.service';
import {ComponentCanDeActivate} from '../../shared/guard/deactivate-guard.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, ComponentCanDeActivate {

  private currentServer;
  serverName: string;
  serverStatus: string;
  id;

  allowEdit = false;

  constructor(private router: Router, private route: ActivatedRoute, private serverSrv: ServerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.currentServer = this.serverSrv.findById(this.id);
        this.serverName = this.currentServer.name;
        this.serverStatus = this.currentServer.status;
      }
    )

    this.route.queryParams.subscribe(
      params => this.allowEdit = params['allowEdit'] == 1
    )
  }

  updateServer() {
    this.serverSrv.updateServer({id: this.id, newServerName: this.serverName, newServerStatus: this.serverStatus});
    this.router.navigate(['../'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.serverName !== this.currentServer.name || this.serverStatus !== this.currentServer.status)
      return confirm('Are you sure want to discard!');

    return true;
  }
}
