import { QuestionService } from './../_services/question.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserService } from '../_services';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  id: number;
  avatarLink: string;

  headers: HttpHeaders = new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${this.authService.getToken()}`,
     'Accept': 'application/json',
     'Access-Control-Allow-Headers': 'Content-Type',
     'Access-Control-Allow-Origin': '*', });

  constructor(private authService: AuthenticationService,
              private userService: UserService) {
    this.id = -1;
    this.avatarLink = '';
  }

  ngOnInit() {
    let a = this.userService.getByToken(this.headers).pipe(catchError(this.handleError));
    a.subscribe((data: any) => {
      // console.log(JSON.parse(data._body)[0].avatarLink);
      this.avatarLink = JSON.parse(data._body)[0].avatarLink;
    });
  }

  logout() {
    console.log('logging out');
    this.authService.logout();
    window.location.reload();
  }

  refresh(): void {
    window.location.reload();
  }

  renderAvatar(): void {
    this.userService.getByToken(this.headers);
    localStorage.setItem('avatarLink', 'abc');
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }

}
