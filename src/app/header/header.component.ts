import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isUserNameExist = sessionStorage.getItem("loggedInUserName");
  constructor(private router: Router) {
    this.router.navigate(["/auth/login"]);
  }

  ngOnInit() {}

  onLoginButtonClick() {
    this.router.navigate(["/auth/login"]);
  }

  onLogOutButtonClick() {
    sessionStorage.clear();
    window.location.reload();
  }
}
