import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../shared/services/server.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server;

  constructor(private serverSrv: ServerService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe(
    //   params => this.server = this.serverSrv.findById(params['id'])
    //
    this.route.data.subscribe(data => this.server = data['server'])
  }

  editServer() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }
}
