import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { isUserAuthenticatedGuardFn } from "./is-user-authenticated.guard";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProfileEditComponent } from "./profile-edit/profile-edit.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/about",
    pathMatch: "full",
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
    canMatch: [isUserAuthenticatedGuardFn],
  },
  {
    path: "profile/edit",
    component: ProfileEditComponent,
    canMatch: [isUserAuthenticatedGuardFn],
  },
  {
    path: "books",
    loadChildren: () =>
      import("./book/book.routes").then((mod) => mod.bookRoutes),
    canMatch: [isUserAuthenticatedGuardFn],
  },
];
