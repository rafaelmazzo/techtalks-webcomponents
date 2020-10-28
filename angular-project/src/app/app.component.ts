import { Component, OnInit } from '@angular/core';
import { ProductList } from './ProductList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  products = ProductList;

  constructor() {}

  ngOnInit(): void {
    console.log('App Componente carregou');
  }
}
