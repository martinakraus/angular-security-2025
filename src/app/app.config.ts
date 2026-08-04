import { ApplicationConfig } from '@angular/core';
import {
  provideHttpClient,
  withXsrfConfiguration,
  withXhr,
} from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withXhr(), withXsrfConfiguration({})),
    provideRouter(routes, withComponentInputBinding()),
    provideAuth0({
      domain: '',
      clientId: '',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};
