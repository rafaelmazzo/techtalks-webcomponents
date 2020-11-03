import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

export interface ProductPrice {
  priceIs: string,
  priceWas: string,
  priceSaving: string
};

export interface ProductTag {
  name: string,
  highlight: boolean
}

export interface ProductImage {
  url:string,
  alt:string,
  title:string
}

@Component({
  tag: 'fn-product-card',
  styleUrl: 'fn-product-card.css',
  shadow: true,
})

export class FnProductCard {

  /**
   * Product image URL
   */
  @Prop() image: ProductImage;

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

  @Event() addToCart: EventEmitter
  addToCartHandler(productCode: string) {
    this.addToCart.emit(productCode);
  }

  componentDidLoad() {
    this.loadFonts();
  }

  componentDidUpdate() {
    console.log('atualizei');
  }

  private getproductCode(): string {
    return this.code;
  }
  private getproductName(): string {
    return this.name;
  }

  private loadFonts() {
    // Add custom font to page DOM since font-face doesn't work within Shadow DOM.
    const fontCssUrl = 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap';

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
      <div class='card-container'>
        <div class='img-container'>
          <img src={this.image.url} alt={this.image.alt} title={this.image.title} />
        </div>
        <div class='product-description-wrapper'>
          <span class='product-code'>Cod.{this.getproductCode()}</span>
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
        <fn-button name="Incluir" onClick={() => this.addToCartHandler(this.getproductCode())}></fn-button>
      </div>
    );
  }
}
