import { TokenHttpInterceptorService } from './services/interceptors/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from './services/api/auth';

@NgModule({
  imports: [],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenHttpInterceptorService,
      multi: true,
    },
    AuthService,
  ],
})
export class SharedModule {}
