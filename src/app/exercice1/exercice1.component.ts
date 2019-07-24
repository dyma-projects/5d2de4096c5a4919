import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
	public attributValue: string = "Attribut value";
	public message: string = "My message";

  constructor() { }

  clickBinding(): void {
  	this.attributValue = "Value changed";
  	this.message = "Button click";
  }
}
