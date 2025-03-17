import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from "@angular/forms";
import { Router } from "@angular/router";

type UserFormGroup = {
  username: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
};

@Component({
  selector: "app-profile-edit",
  imports: [ReactiveFormsModule],
  templateUrl: "./profile-edit.component.html",
  styleUrl: "./profile-edit.component.scss",
})
export class ProfileEditComponent {
  private readonly http = inject(HttpClient);
  formBuilder = inject(NonNullableFormBuilder);
  private readonly router = inject(Router);
  form: FormGroup<UserFormGroup> = this.formBuilder.group({
    username: [""],
    email: [""],
    password: [""],
  });

  onSubmit() {
    const body = new HttpParams()
      .set("username", this.form.value.username || "")
      .set("password", this.form.value.password || "")
      .set("email", this.form.value.email || "");

    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
    });

    this.http
      .post("/api/profile", body.toString(), { headers })
      .subscribe(() => {
        this.router.navigate(["/profile"]);
      });
  }
}
