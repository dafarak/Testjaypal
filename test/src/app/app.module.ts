import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
// import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material'
import {MatFormFieldModule} from '@angular/material/form-field';
import {  MatIconModule } from '@angular/material/icon';
import {  MatSelectModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { UserdataComponent } from './user/userdata/userdata.component';
import { UserRoutingModule } from './user-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { FilterPipe } from './form/form.filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    // HeaderComponent,
    FooterComponent,
    FormComponent,
    UserdataComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
     ReactiveFormsModule,
     MatIconModule,
     MatSelectModule,
     MatInputModule,
     MatRadioModule,
     UserRoutingModule,
     MatMenuModule,
     MatCardModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
