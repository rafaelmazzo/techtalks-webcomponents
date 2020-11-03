import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'fn-tag',
  styleUrl: 'fn-tag.css',
  styleUrls:{
    default:'themes/default.css',
    eudora:'themes/eudora.css',
    boticario: 'themes/boticario.css'
  },
  shadow: true,
})
export class FnTag {
  @Prop() nameTag: string;
  @Prop() isHighlight: boolean = false;

  getTagName() {
    return this.nameTag;
  }
  getTagHighlight(): boolean {
    return this.isHighlight;
  }
  componentDidLoad() {
  }
  render() {
    return (
      <Host>
        <span class={this.getTagHighlight() ? 'tag tag-highlight' : 'tag'}>{this.getTagName()}</span>
      </Host>
    );
  }

}
