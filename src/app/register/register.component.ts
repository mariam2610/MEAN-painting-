import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    user: User;
    constructor(private router: Router, private http: HttpClient)
    { 

    }

    ngOnInit(): void {
    }
    onCreatePost(postData: { user_fname: string; user_lname: string; user_email: string; user_pswd: string; user_contact: number; user_addr: string; }) {
        console.log(postData);
        this.http.post("http://localhost:3005/api/user/signup", postData).subscribe(responseData => {
            console.log(responseData);
            alert("Hurray! Account Created");
            this.router.navigate(['/login']);
        });
    }

}
