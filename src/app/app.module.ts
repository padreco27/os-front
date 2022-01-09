import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';





import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoComponent } from './views/components/tecnico/tecnico.component';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoUptadeComponent } from './views/components/tecnico/tecnico-uptade/tecnico-uptade.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './views/components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteComponent } from './views/components/cliente/cliente.component';
import { OsComponent } from './views/components/os/os.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './views/components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUptadeComponent } from './views/components/cliente/cliente-uptade/cliente-uptade.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';

import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsUptadeComponent } from './views/components/os/os-uptade/os-uptade.component';
import { OsClosedComponent } from './views/components/os/os-closed/os-closed.component';
import { OsDescriptionComponent } from './views/components/os/os-description/os-description.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,

    TecnicoComponent,
    TecnicoReadComponent,
    TecnicoUptadeComponent,
    TecnicoCreateComponent,
    TecnicoDeleteComponent,

    ClienteComponent,
    
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteDeleteComponent,
    ClienteUptadeComponent,
    
    OsReadComponent,
    OsComponent,
    OsCreateComponent,
    OsUptadeComponent,
    OsClosedComponent,
    OsDescriptionComponent


  ],
  imports: [
 
  

    AppRoutingModule,
    
    BrowserModule,

   
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
