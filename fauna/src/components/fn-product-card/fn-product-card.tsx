import { Component, Host, h, Prop } from '@stencil/core';

export interface ProductPrice {
  priceIs: string,
  priceWas: string,
  priceSaving: string
};

@Component({
  tag: 'fn-product-card',
  styleUrl: 'fn-product-card.css',
  shadow: true,
})

export class FnProductCard {

  @Prop() image: string;
  @Prop() code: string;
  @Prop() name: string;
  @Prop() price: ProductPrice;
  @Prop() tags: [] = [];

  private getproductCode(): string {
    return this.code;
  }
  private getproductName(): string {
    return this.name;
  }
  private getProductImageURL(): string {
    return this.image;
  }
  componentDidLoad() {
    console.log('Componente FnProductCard carregou')
  }

  render() {
    return (
      <Host>
        <div class='card-container'>
          <div class='img-container'>
            <img src={this.getProductImageURL()} />
          </div>
          <div class='product-description-wrapper'>
            <span class='product-code'>{this.getproductCode()}</span>
            <a href="#" class="product-name">{this.getproductName()}</a>
            <div class='tags-container'>
              {this.tags.map(({ name, highlight }) => {
                return (
                  <fn-tag is-highlight={highlight} name-tag={name}></fn-tag>
                )
              }
              )}
            </div>
            <div class='product-price-container'>
            <p class='price-was'>De <span class='price-was-value'>{this.price.priceWas}</span> por</p>
            <p class='price-is'>{this.price.priceIs}</p>
            <p class='price-saving'>Economize: {this.price.priceSaving}</p>
            </div>
          </div>
          <a href='#' class='add-cart-btn'>Incluir</a>
        </div>
      </Host>
    );
  }
}
