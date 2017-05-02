import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>hola {{name}}</h1>
  <h2>Este es mi primer template</h2>
  `,
})
export class AppComponent  { name = 'Programad Malditos'; }
