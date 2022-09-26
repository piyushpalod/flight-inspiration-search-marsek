import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../api/auth';

@Injectable()
export class TokenHttpInterceptorService implements HttpInterceptor {
  token: string | null;
  constructor(private authService: AuthService) {
    this.token = this.authService.getToken();
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.endsWith('/oauth2/token')) {
      let request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      return next.handle(request);
    }
    return next.handle(req);
  }
}
