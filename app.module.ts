import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginService } from './ServiceRepository/login.service'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS  } from '@angular/common/http';  
import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule ,MatListModule  
} from '@angular/material';  
import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HAMMER_LOADER } from '@angular/platform-browser';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

const appRoutes: Routes = [
  { path: 'student-details', component: StudentDetailsComponent },
  { path: 'login', component: LoginComponent },
];
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { CustomHttpInterceptor } from './http-interceptor';
import { SignComponent } from './sign/sign.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    LoginComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,MatSelectModule,MatCheckboxModule,
    AppRoutingModule,MatSortModule,MatPaginatorModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,MatListModule,MatProgressSpinnerModule, MatTableModule, 
    AppRoutingModule,RouterModule.forRoot(
      appRoutes, 
      { enableTracing: false } // <-- debugging purposes only
    )
   
  ],
  providers: [HttpClientModule, StudentDetailsComponent,LoginComponent,MatDatepickerModule,{
    provide: HAMMER_LOADER, useValue: () => new Promise(() => {})
  },[{  provide: HTTP_INTERCEPTORS,  useClass: CustomHttpInterceptor, multi: true }]],   
  bootstrap: [AppComponent]
})
export class AppModule { }
