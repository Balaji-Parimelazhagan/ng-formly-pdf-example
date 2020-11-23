import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { RouterModule, Routes } from '@angular/router';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'update-from',
        component: UpdateFormComponent
      }
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UpdateFormComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(routes),
    NgMultiSelectDropDownModule.forRoot(),
    FormlyModule.forRoot({
      types: [{
        name: 'profile', component: ProfileComponent,
        defaultOptions: { templateOptions: { alwaysOpen: true } },
       }]
    })
  ],
  bootstrap: [AppComponent],
  entryComponents: [UpdateFormComponent],
  providers: [BsModalRef]
})
export class AppModule { }
