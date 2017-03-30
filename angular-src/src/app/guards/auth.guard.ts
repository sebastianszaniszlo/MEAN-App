import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private AuthService : AuthService, private Router : Router){

    }

    canActivate() : boolean {
        if(this.AuthService.IsLoggedIn()){
            return true;
        }
        else{
            this.Router.navigate(['login']);
            return false;
        }
    }
}
