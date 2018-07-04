import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private cookieService: CookieService) { }
  allCookies: {} = this.cookieService.getAll();
  loggedIn: boolean;
  ngOnInit() {
    console.log(this.allCookies);
  }
}
