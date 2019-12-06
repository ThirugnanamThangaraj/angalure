import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { SpinnerService } from './ServiceRepository/spinner.service';
import { Router } from '@angular/router';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService,private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.spinnerService.show();
      return next
          .handle(req)
          .pipe(
              tap((event: HttpEvent<any>) => {
                  debugger;
                  if (event instanceof HttpResponse) {
                      this.spinnerService.hide();
                  }
              }, (error) => {
debugger;
                if (error instanceof HttpErrorResponse) {
                    debugger;
                    if(error.url.includes("Login/Tokens")){
                    if (error.status === 401) {
                        this.router.navigate(['./login']);
                    }else if(error.status === 400){
                                               this.router.navigate(['./login']);
                    }
                }else{
                    if (error.status === 401 || error.status === 400) {
                        alert(error.message);
                    }else if(error.status===0 ){
                        alert(error.message);

                    }

                }


                  }
                  this.spinnerService.hide();
              })
          );
          
  }
}