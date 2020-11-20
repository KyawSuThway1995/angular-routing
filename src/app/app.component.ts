import { Component } from '@angular/core';
import {ServerService} from './shared/services/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(serverSrv: ServerService) {
  }
}
