import { ApplicationConfig, CSP_NONCE } from "@angular/core";
import { provideHttpClient, withXsrfConfiguration } from "@angular/common/http";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
