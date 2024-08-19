import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParametrosFormComponent } from './parametros-form/parametros-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Marca o componente como standalone
  imports: [
    RouterModule,
    ParametrosFormComponent  // Importe o ParametrosFormComponent
  ]
})
export class AppComponent {
  title = 'parametros-cortes';
}
