import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'atom-button',
  styleUrl: 'atom-button.css',
  shadow: true,
})
export class AtomButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
