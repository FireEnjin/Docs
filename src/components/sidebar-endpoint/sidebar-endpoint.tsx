import { Component, Event, EventEmitter, Prop, h, ComponentInterface } from '@stencil/core';
import { EndpointPresetOptions } from '../../interfaces';

@Component({
  tag: 'fireenjin-docs-sidebar-endpoint',
  styleUrl: 'sidebar-endpoint.css',
  shadow: true,
})
export class SidebarEndpoint implements ComponentInterface {
  @Event() enjinSetPreset: EventEmitter<any>;

  @Prop() useHash? = false;
  @Prop() host?: string;
  @Prop() endpoint: EndpointPresetOptions;

  render() {
    return this.endpoint ? (
      <div>
        <a href={`${this.host ? this.host : ''}${this.useHash ? '#' : ''}/endpoint/${this.endpoint.name}`}>{this.endpoint.name}</a>
        <div class="endpoint-presets">
          {this.endpoint &&
            Object.keys(this.endpoint).map(presetName => (
              <a href={`${this.host ? this.host : ''}${this.useHash ? '#' : ''}/endpoint/${this.endpoint.name}/${presetName}`}>
                {this.endpoint[presetName].presets ? this.endpoint.presets[presetName].name : presetName}
              </a>
            ))}
        </div>
      </div>
    ) : null;
  }
}
