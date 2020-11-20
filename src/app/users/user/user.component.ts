import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id;
  name;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.name = this.route.snapshot.params['name'];

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
    })

    this.route.queryParams.subscribe(params => {
      console.log('Age : ', params['age']);
      console.log('Address : ', params['address']);
    })

    this.route.fragment.subscribe(fragment => console.log(fragment))
  }

  ngOnDestroy(){
    console.log('User Component Destroy');
  }

}
