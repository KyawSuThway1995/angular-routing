import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLogin = false;

  previousUrl = null;

  constructor(private router: Router) { }

  toggle(){
    this._isLogin = !this._isLogin;

    if (this._isLogin && this.previousUrl){
      this.router.navigateByUrl(this.previousUrl);
      this.previousUrl = null;
    }
  }

  get isLogin(){return this._isLogin}
}
