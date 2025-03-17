import { AsyncPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Observable } from "rxjs";

type User = {
  username: string;
  email: string;
  password?: string;
};

@Component({
  selector: "app-profile",
  imports: [AsyncPipe, RouterLink],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.scss",
})
export class ProfileComponent {
  private readonly http = inject(HttpClient);

  user$: Observable<User> = this.http.get<User>("/api/profile");
}
