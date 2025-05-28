import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  //standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items = [
    {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/960px-Beethoven.jpg', alt: 'Ludwig van Beethoven', caption: 'Ludwig van Beethoven'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wolfgang-amadeus-mozart_1.jpg/1200px-Wolfgang-amadeus-mozart_1.jpg', alt: 'Wolfgang Amadeus Mozart', caption: 'Wolfgang Amadeus Mozart'},
    {src: 'https://cdn.britannica.com/06/167806-050-AAA48A08/George-Frideric-Handel-oil-canvas-Thomas-Hudson-1736.jpg', alt: 'George Frideric Handel', caption: 'George Frideric Handel'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg', alt: 'Johann Sebastian Bach', caption: 'Johann Sebastian Bach'}
  ];
}

