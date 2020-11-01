import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'fn-button',
  styleUrl: 'fn-button.css',
  styleUrls:{
    default: 'themes/default.css',
    eudora:'themes/eudora.css',
    boticario: 'themes/boticario.css'
  },
  shadow: true,
})
export class FnButton {

  @Prop() name:string;

  private getButtonName(){
    return this.name;
  }

  render() {
    return (
      <Host>
       <button>{this.getButtonName()}</button>
      </Host>
    );
  }

}
