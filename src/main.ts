import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { ParametrosFormComponent } from './app/parametros-form/parametros-form.component';

const routes = [
  { path: '', component: ParametrosFormComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    ReactiveFormsModule
  ]
}).catch(err => console.error(err));
