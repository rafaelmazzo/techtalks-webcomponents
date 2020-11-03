import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'fn-button',
  styleUrl: 'fn-button.css',
  styleUrls: {
    default: 'themes/default.css',
    eudora: 'themes/eudora.css',
    boticario: 'themes/boticario.css'
  },
  shadow: true,
})
export class FnButton {

  /** button name */
  @Prop() name: string;

  private getButtonName() {
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
