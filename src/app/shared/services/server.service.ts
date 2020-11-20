import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  servers = [
    {id: 1, name: 'Development Server', status: 'OFFLINE'},
    {id: 2, name: 'Test Server', status: 'ONLINE'},
    {id: 3, name: 'Production Server', status: 'ONLINE'}
    ];

  constructor() {
    console.log('ServerService construct');
  }

  findById(id){
    return this.servers.find(server => server.id == id);
  }

  updateServer({id, newServerName, newServerStatus}){
    let server = this.findById(id);
    server.name = newServerName;
    server.status  =newServerStatus;
  }
}
