import { Component, Prop, h } from '@stencil/core';
import { ComponentPresetOptions, EndpointPresetOptions, ModelPresetOptions } from '../../interfaces';

@Component({
  tag: 'fireenjin-docs-sidebar',
  styleUrl: 'sidebar.css',
})
export class Sidebar {
  @Prop() components?: ComponentPresetOptions[] = [];
  @Prop() endpoints?: EndpointPresetOptions[] = [];
  @Prop() models?: ModelPresetOptions[] = [];
  @Prop() host?: string;
  @Prop() useHash? = false;

  render() {
    return (
      <div>
        {this.components?.length > 0 && <div class="fireenjin-docs-sidebar-header fireenjin-docs-sidebar-components">Components</div>}
        {this.components?.length > 0 && this.components.map(component => <fireenjin-docs-sidebar-component host={this.host} component={component} useHash={this.useHash} />)}
        {this.endpoints?.length > 0 && <div class="fireenjin-docs-sidebar-header fireenjin-docs-sidebar-endpoints">Endpoints</div>}
        {this.endpoints &&
          this.endpoints.length > 0 &&
          this.endpoints.map(endpoint => <fireenjin-docs-sidebar-endpoint host={this.host} endpoint={endpoint} useHash={this.useHash} />)}
        {this.models?.length > 0 && <div class="fireenjin-docs-sidebar-header fireenjin-docs-sidebar-models">Models</div>}
        {this.models && this.models.length > 0 && this.models.map(model => <fireenjin-docs-sidebar-model host={this.host} model={model} useHash={this.useHash} />)}{' '}
      </div>
    );
  }
}
