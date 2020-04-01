import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserdataComponent } from './user/userdata/userdata.component';
import { FormComponent  } from './form/form.component';
import { CheckboxGuard } from './checkbox.guard';
const routes: Routes = [
 
  { path: 'user', component:  UserComponent ,
  children: [
    
      { path: 'view',canActivate: [CheckboxGuard], component:  UserdataComponent  }
    ]  },
    
    { path: '', component:  FormComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
