import '@stencil/router';
import { Component, Element, State, h, Prop, ComponentInterface, Method } from '@stencil/core';
import { marked } from 'marked';
import { ComponentPresetOptions, EndpointPresetOptions, ModelPresetOptions } from '../../interfaces';

@Component({
  tag: 'fireenjin-docs-gallery',
  styleUrl: 'gallery.css',
})
export class Gallery implements ComponentInterface {
  docs: any = [];

  @Prop() host: string;
  @Prop() ionicDocsFilePath: string;
  @Prop() heading = 'FireEnjin Docs';
  @Prop() useHash = false;
  @Prop({ mutable: true }) components: ComponentPresetOptions[] = [];
  @Prop({ mutable: true }) endpoints: EndpointPresetOptions[] = [];
  @Prop({ mutable: true }) models: ModelPresetOptions[] = [];

  @Element() galleryEl: any;

  @State() currentDoc: string;
  @State() menuOpen = false;
  @State() docsOpen = false;

  @Method()
  async getPresets() {
    try {
      const response = await fetch(this.ionicDocsFilePath ? this.ionicDocsFilePath : `${this.host ? this.host : ''}/core.json`);
      this.docs = await response.json();
    } catch (error) {
      console.log('Error getting docs for components.');
    }
    this.components = this.docs && this.docs.components && this.docs.components ? this.docs.components : [];
    await this.getComponentPresets();
    await this.getEndpointPresets();
    await this.getModelPresets();
  }

  toggleSidebar(event) {
    if (event) {
      event.preventDefault();
      this.menuOpen = !this.menuOpen;
    }
  }

  viewDocs(event) {
    if (event) {
      event.preventDefault();
    }
    let docsMarkdown = '';
    for (const component of this.components) {
      if (window.location.pathname.split('/')[2] === component.tag) {
        docsMarkdown = component.readme;
        break;
      }
    }
    this.currentDoc = marked(docsMarkdown);
    this.docsOpen = !this.docsOpen;
  }

  async getComponentPresets() {
    for (const [index, component] of this.components.entries()) {
      this.components[index].url = `${this.host ? this.host : ''}/component/${component.tag}/:preset?`;
      const componentName = component.tag.replace(component.tag.split('-')[0] + '-', '');
      this.components[index].presets = (window as any).presets && (window as any)?.presets[`${componentName}.presets`] ? (window as any).presets[`${componentName}.presets`] : {};
    }

    this.components = [...this.components];
  }

  async getEndpointPresets() {
    for (const [index, endpoint] of this.endpoints.entries()) {
      this.endpoints[index].url = `${this.host ? this.host : ''}/endpoint/${endpoint.name}/:preset?`;
      const endpointName = endpoint.name.replace(endpoint.name.split('-')[0] + '-', '');
      this.endpoints[index].presets = (window as any).presets && (window as any)?.presets[`${endpointName}.presets`] ? (window as any).presets[`${endpointName}.presets`] : {};
    }

    this.endpoints = [...this.endpoints];
  }

  async getModelPresets() {
    for (const [index, model] of this.models.entries()) {
      this.models[index].url = `${this.host ? this.host : ''}/model/${model.name}/:preset?`;
      const modelName = model.name.replace(model.name.split('-')[0] + '-', '');
      this.models[index].presets = (window as any).presets && (window as any)?.presets[`${modelName}.presets`] ? (window as any).presets[`${modelName}.presets`] : {};
    }

    this.models = [...this.models];
  }

  componentDidLoad() {
    this.getPresets();
  }

  render() {
    return [
      <nav
        id="menu"
        class={{
          open: this.menuOpen,
        }}
      >
        <fireenjin-docs-sidebar useHash={this.useHash} host={this.host} components={this.components} />
      </nav>,
      <main id="panel">
        <header>
          <a class="menu-button" onClick={event => this.toggleSidebar(event)}>
            &#9776;
          </a>
          {this.heading ? <h2 innerHTML={this.heading} /> : null}
          <a class="docs-button" onClick={event => this.viewDocs(event)}>
            Docs
          </a>
        </header>
        <div
          id="page-wrapper"
          class={{
            'docs-open': this.docsOpen,
            'menu-open': this.menuOpen,
          }}
        >
          <div class="docs-panel" innerHTML={this.currentDoc} />
          <div class="component-wrapper">
            <stencil-router id="router" historyType={this.useHash ? 'hash' : 'browser'}>
              {this.components.map(component => (
                <stencil-route url={component.url} component="fireenjin-docs-organism" componentProps={{ component, useHash: this.useHash, host: this.host }} />
              ))}
              {this.models.map(component => (
                <stencil-route url={component.url} component="fireenjin-docs-organism" componentProps={{ component, useHash: this.useHash, host: this.host }} />
              ))}
              {this.endpoints.map(component => (
                <stencil-route url={component.url} component="fireenjin-docs-organism" componentProps={{ component, useHash: this.useHash, host: this.host }} />
              ))}
            </stencil-router>
          </div>
        </div>
      </main>,
    ];
  }
}
