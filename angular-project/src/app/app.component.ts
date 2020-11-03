import { Component, OnInit } from '@angular/core';
import { ProductList } from './ProductList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products = ProductList;
  product = {
    name: 'Gel de Limpeza Facial Nutritivo Vitamina B5 Botik 150g',
    code: '78929',
    image: {
      url:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/B77149/Slide13.JPG",
      alt:"imagem-produto-nativa-spa",
      title:"Nativa Spa Trio de Sabonetes em Barra"
    },
    tags: [
      {
        name: 'Promoção',
        highlight: true,
      },
      {
        name: 'Lançamento',
        highlight: false,
      },
      {
        name: 'Beauty Week',
        highlight: false,
      },
    ],
    productPrice: {
      priceIs: 'R$49,90',
      priceWas: 'R$39,90',
      priceSaving: 'R$10,00',
    },
  };

  constructor() {}

  ngOnInit(): void {}
  productAdded = (event) => {
    const newItem = event.detail;
    console.log(newItem);
  };
}
