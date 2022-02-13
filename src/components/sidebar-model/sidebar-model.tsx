import { Component, Event, EventEmitter, Prop, h, ComponentInterface } from '@stencil/core';
import { ModelPresetOptions } from '../../interfaces';

@Component({
  tag: 'fireenjin-docs-sidebar-model',
  styleUrl: 'sidebar-model.css',
  shadow: true,
})
export class SidebarModel implements ComponentInterface {
  @Event() enjinSetPreset: EventEmitter<any>;

  @Prop() useHash? = false;
  @Prop() host?: string;
  @Prop() model: ModelPresetOptions;

  render() {
    return this.model ? (
      <div>
        <a href={`${this.host ? this.host : ''}${this.useHash ? '#' : ''}/model/${this.model.name}`}>{this.model.name}</a>
        <div class="model-presets">
          {this.model &&
            Object.keys(this.model).map(presetName => (
              <a href={`${this.host ? this.host : ''}${this.useHash ? '#' : ''}/model/${this.model.name}/${presetName}`}>
                {this.model[presetName].presets ? this.model.presets[presetName].name : presetName}
              </a>
            ))}
        </div>
      </div>
    ) : null;
  }
}
