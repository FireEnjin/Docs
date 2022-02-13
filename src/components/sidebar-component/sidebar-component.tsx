import { Component, Event, EventEmitter, Prop, h, ComponentInterface } from '@stencil/core';
import { ComponentPresetOptions } from '../../interfaces';

@Component({
  tag: 'fireenjin-docs-sidebar-component',
  styleUrl: 'sidebar-component.css',
  shadow: true,
})
export class SidebarComponent implements ComponentInterface {
  @Event() enjinSetPreset: EventEmitter<any>;

  @Prop() useHash? = false;
  @Prop() host?: string;
  @Prop() component?: ComponentPresetOptions;

  render() {
    return this.component ? (
      <div>
        <a href={`${this.host ? this.host : ''}${this.useHash ? '#' : ''}/component/${this.component.tag}`}>{this.component.tag}</a>
        <div class="component-presets">
          {this.component.presets &&
            Object.keys(this.component.presets).map(presetName => (
              <a href={`${this.host ? this.host : ''}${this.useHash ? '#' : ''}/component/${this.component.tag}/${presetName}`}>
                {this.component.presets[presetName].name ? this.component.presets[presetName].name : presetName}
              </a>
            ))}
        </div>
      </div>
    ) : null;
  }
}
