import { Component, Prop, State, h, Element, Method, Build } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'fireenjin-docs-organism',
  styleUrl: 'organism.css',
  scoped: true,
})
export class Organism {
  @Element() organismEl: any;

  @Prop({
    mutable: true,
  })
  component: any;
  @Prop() match: MatchResults;

  @State() currentProps = {};
  @State() currentPreset: any = {};

  @Method()
  async setPreset(presetName = 'default') {
    if (this.component.presets && this.component.presets[presetName] && this.component.presets[presetName].props) {
      this.currentPreset = this.component.presets[presetName];
      this.currentProps = this.component?.presets && this.component?.presets[presetName]?.props ? { ...this.component.presets[presetName].props } : {};
    } else {
      this.currentPreset = this.component?.presets?.default ? this.component.presets.default : {};
      this.currentProps = this.component?.presets?.default?.props ? this.component.presets.default.props : {};
    }
    if (typeof this.currentPreset?.hooks?.onSetPreset === 'function')
      this.currentPreset.hooks.onSetPreset({
        organismEl: this.organismEl,
        props: this.currentProps,
        preset: this.currentPreset,
        presetName,
        component: this.component,
      });

    return this.currentPreset;
  }

  @Method()
  async updateProp(event, propName: string) {
    this.currentProps[propName] = event.target.value;
    this.currentProps = { ...this.currentProps };
    if (typeof this.currentPreset?.hooks?.onUpdateProp === 'function')
      this.currentPreset.hooks.onUpdateProp({
        organismEl: this.organismEl,
        props: this.currentProps,
        preset: this.currentPreset,
        propName,
        component: this.component,
      });

    return this.currentProps;
  }

  componentWillLoad() {
    if (!Build?.isBrowser) return;

    if (this.match && this.match.params && this.match.params.preset) {
      this.setPreset(this.match.params.preset);
    }

    if (typeof this.currentPreset?.hooks?.onComponentWillLoad === 'function')
      this.currentPreset.hooks.onComponentWillLoad({
        organismEl: this.organismEl,
        props: this.currentProps,
        preset: this.currentPreset,
        component: this.component,
      });
  }

  componentDidLoad() {
    if (!Build?.isBrowser) return;

    if (typeof this.currentPreset?.hooks?.onComponentDidLoad === 'function')
      this.currentPreset.hooks.onComponentDidLoad({
        organismEl: this.organismEl,
        props: this.currentProps,
        preset: this.currentPreset,
        component: this.component,
      });
  }

  render() {
    const Component = this.component?.tag;
    return (
      <div class="organism-wrapper">
        <div class="organism-canvas">
          {this.currentPreset?.beforeHTML && <div class={{ 'organism-canvas-before': true }} innerHTML={this.currentPreset.beforeHTML(this.component, this.currentProps)} />}
          {Component && !this.currentPreset?.innerHTML && <Component {...this.currentProps} />}
          {this.currentPreset?.innerHTML && <div class="organism-canvas-inner" innerHTML={this.currentPreset.innerHTML(this.component, this.currentProps)} />}
          {this.currentPreset?.afterHTML && <div class="organism-canvas-after" innerHTML={this.currentPreset.afterHTML(this.component, this.currentProps)} />}
        </div>
        <div class="organism-sidebar">
          {this.component.props.map(prop => (
            <label>
              {prop.name} - {prop.docs}
              <input
                name={prop.name}
                onInput={event => this.updateProp(event, prop.name)}
                value={this.currentProps && this.currentProps[prop.name] ? this.currentProps[prop.name] : null}
              />
            </label>
          ))}
          <label>
            Inner HTML
            <input
              name="innerHTML"
              onInput={event => this.updateProp(event, 'innerHTML')}
              value={this.currentProps && this.currentProps['innerHTML'] ? this.currentProps['innerHTML'] : null}
            />
          </label>
          <label>
            Class
            <input name="class" onInput={event => this.updateProp(event, 'class')} value={this.currentProps && this.currentProps['class'] ? this.currentProps['class'] : null} />
          </label>
        </div>
      </div>
    );
  }
}
