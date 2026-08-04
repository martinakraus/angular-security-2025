import { ApplicationConfig } from '@angular/core';
import {
  provideHttpClient,
  withXsrfConfiguration,
  withXhr,
} from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Todo implement xsrf protection (withXsrfConfiguration)
    provideHttpClient(withXhr()),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
