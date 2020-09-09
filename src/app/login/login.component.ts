import { Component, OnInit } from '@angular/core';
import { Userlogin } from '../userlogin.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { throwError, BehaviorSubject } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user = new BehaviorSubject<Userlogin>(null);
    msgs=[];
    constructor(private router: Router, private http: HttpClient, private messageService: MessageService) { }
    
    ngOnInit(): void {
    }

    loginClicked(form: NgForm) 
    {
        
        const user_email = form.value.user_email;
        const user_pswd = form.value.user_pswd;
        
        const login = { user_email: user_email, user_pswd: user_pswd };

        var loggedin=true;
        if (!this.user)
        {
            loggedin=false;
            return Error('Username or password is incorrect');
        }
        
        else
        {
        this.http.post('http://localhost:3005/api/user/signin', login).subscribe(responseData => {
            console.log(responseData);
            //this.messageService.add("");
            this.router.navigate(['/homepage']);

            //}
        })
        form.reset();
        }
    }

}
