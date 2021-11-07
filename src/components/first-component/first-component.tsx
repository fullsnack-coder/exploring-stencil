import { Component, Prop, h } from '@stencil/core';

@Component({
  styleUrl: 'first-component.css',
  tag: 'first-component',
})
export class FirstComponent {
  @Prop() componentName: string;
  render() {
    return (
      <div class="first_component">
        <p>{this.componentName}</p>
      </div>
    );
  }
}
