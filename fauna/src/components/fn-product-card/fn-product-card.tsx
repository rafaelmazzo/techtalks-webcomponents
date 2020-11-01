import { Component, Host, h, Prop } from '@stencil/core';

/**
  * Product interface
  */
export interface ProductPrice {
  priceIs: string,
  priceWas: string,
  priceSaving: string
};

export interface ProductTag {
  name: string,
  highlight: boolean
}
const fontCssUrl = 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap';


@Component({
  tag: 'fn-product-card',
  styleUrl: 'fn-product-card.css',
  shadow: true,
})

export class FnProductCard {

  /**
   * Product image URL
   */
  @Prop() image: string;

  /**
   * Product code
   */
  @Prop() code: string = '000000';

  /**
   * Product name
   */
  @Prop() name: string = '';

  /**
   * Product price object
   */
  @Prop() price: ProductPrice;

  /**
   * Product tags
   */
  @Prop() tags: ProductTag[];

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
    console.log('Componente FnProductCard carregou');
    // Add custom font to page DOM since font-face doesn't work within Shadow DOM.
    let element = document.querySelector(`link[href="${fontCssUrl}"]`);

    // Only inject the element if it's not yet present
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', 'stylesheet');
      element.setAttribute('href', fontCssUrl);
      document.head.appendChild(element);
    }
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
          <fn-button name="Incluir"></fn-button>
          {/* <a href='#' class='add-cart-btn'>Incluir</a> */}
        </div>
      </Host>
    );
  }
}
