import { Component, OnInit } from '@angular/core';
import {ServerService} from '../shared/services/server.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers;

  constructor(private serverSrv: ServerService, private router: Router) { }

  ngOnInit(): void {
    this.servers = this.serverSrv.servers;
  }

  goToServer(id: any) {
    this.router.navigate(['/servers', id], {queryParams: {allowEdit: id == 3 ? 1 : 0}, fragment: 'sec1'})
  }
}
