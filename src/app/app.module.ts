import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    DeleteConfirmationComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
