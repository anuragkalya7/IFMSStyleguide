import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ComponentsComponent } from './components/components.component';
import { FooterComponent } from './footer/footer.component';
import { FooterLandingComponent } from './footer-landing/footer-landing.component';
import { StyleguideComponent } from './styleguide/styleguide.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule } from '@angular/material/button';
import {MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { EmployeeServiceDetailsComponent } from './employee-service-details/employee-service-details.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { AttachfileComponent } from './attachfile/attachfile.component';
import { DatatableComponent } from './datatable/datatable.component';
// datatable
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SteperComponent } from './steper/steper.component';
// import { SearchdropdownComponent } from './searchdropdown/searchdropdown.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MuliselectautocopleteComponent } from './muliselectautocoplete/muliselectautocoplete.component';
import { TogglesidemenuComponent } from './togglesidemenu/togglesidemenu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormComponent } from './form/form.component';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent,
    HeaderComponent,
    ComponentsComponent,
    FooterComponent,
    FooterLandingComponent,
    StyleguideComponent,
    SidemenuComponent,
    EmployeeServiceDetailsComponent,
    AttachfileComponent,
    DatatableComponent,
    SteperComponent,
    MuliselectautocopleteComponent,
    TogglesidemenuComponent,
    FormComponent,
    DialogContentExampleDialogComponent,
    // SearchdropdownComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatInputModule,
    MatTableModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatStepperModule,
    MatSidenavModule,
    // datatable
    MatSortModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
