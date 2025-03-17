import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { isUserAuthenticatedGuardFn } from "./is-user-authenticated.guard";

export const routes: Routes = [
  {
    path: "",
    component: AboutComponent,
  },
  {
    path: "books",
    loadChildren: () =>
      import("./book/book.routes").then((mod) => mod.bookRoutes),
    canMatch: [isUserAuthenticatedGuardFn],
  },
];
