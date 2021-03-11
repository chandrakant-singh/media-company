import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  listOfPrivateUsers = [
    { userid: "admin1@media.com", password: "admin1", username: "UserNameOne" },
    { userid: "admin2@media.com", password: "admin2", username: "UserNameTwo" },
    {
      userid: "admin3@media.com",
      password: "admin3",
      username: "UserNameThree",
    },
  ];
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    if (sessionStorage.getItem("loggedInUserName")) {
      this.router.navigate(["pages/home"]);
    }
  }

  ngOnInit() {
    this.createAddEmployeeForm();
  }

  createAddEmployeeForm() {
    this.loginForm = this.fb.group({
      email: ["admin1@media.com", Validators.required],
      password: ["admin1", Validators.required],
    });
  }

  onSubmit() {
    const userName = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.checkUserAreSame(userName, password);
  }

  checkUserAreSame(loggedInUserName: string, loggedInUserPassword: string) {
    for (let propertyName of this.listOfPrivateUsers) {
      if (
        propertyName["userid"] === loggedInUserName &&
        propertyName["password"] === loggedInUserPassword
      ) {
        sessionStorage.setItem("loggedInUserName", propertyName["username"]);
        window.location.reload();
        break;
      }
    }
  }
}
