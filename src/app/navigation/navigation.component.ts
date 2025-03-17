import { Component, inject } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { UserStateService } from "../user-state.service";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-navigation",
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: "./navigation.component.html",
  styleUrl: "./navigation.component.scss",
})
export class NavigationComponent {
  private readonly userStateService = inject(UserStateService);
  private readonly router = inject(Router);
  isLoggedIn$ = this.userStateService.isLoggedIn$;

  logout(mouseEvent: MouseEvent) {
    mouseEvent.preventDefault();
    this.userStateService.logout();
    this.router.navigate(["/login"]);
  }
}
