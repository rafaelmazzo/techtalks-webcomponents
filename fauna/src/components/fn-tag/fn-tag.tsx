import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'fn-tag',
  styleUrl: 'fn-tag.css',
  shadow: true,
})
export class FnTag {
  @Prop() nameTag: string;
  @Prop() isHighlight: boolean;

  getTagName() {
    return this.nameTag;
  }
  getTagHighlight(): boolean {
    return this.isHighlight;
  }
  componentDidLoad() {
    console.log('Componente FnTag carregou')
  }
  render() {
    return (
      <Host>
        <span class={this.getTagHighlight() ? 'tag tag-highlight' : 'tag'}>{this.getTagName()}</span>
      </Host>
    );
  }

}
