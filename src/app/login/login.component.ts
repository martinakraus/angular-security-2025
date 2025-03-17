import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { take } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { UserStateService } from "../user-state.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly userStateService = inject(UserStateService);
  private readonly formBuilder = inject(FormBuilder);
  views = 0;
  form = this.formBuilder.nonNullable.group({
    name: [""],
    password: [""],
  });

  submit() {
    const credentials = this.form.getRawValue();
    this.http
      .post("/login", credentials)
      .pipe(take(1))
      .subscribe((res) => {
        this.userStateService.login();
        console.log(res);
        this.router.navigate(["/profile"]);
      });
  }

  // sendPost() {
  //   this.http
  //     .post("/send", {})
  //     .pipe(take(1))
  //     .subscribe((res) => console.log(res));
  // }
}
