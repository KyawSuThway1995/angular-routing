import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    {id: 1, name: 'Aung Aung'},
    {id: 2, name: 'Ni Ni'},
    {id: 3, name: 'Shein Min Thu'}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToHome() {
    this.router.navigate(['home'])
  }
}
