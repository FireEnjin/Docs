# fireenjin-docs-sidebar

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute  | Description | Type                       | Default     |
| ------------ | ---------- | ----------- | -------------------------- | ----------- |
| `components` | --         |             | `ComponentPresetOptions[]` | `[]`        |
| `endpoints`  | --         |             | `EndpointPresetOptions[]`  | `[]`        |
| `host`       | `host`     |             | `string`                   | `undefined` |
| `models`     | --         |             | `ModelPresetOptions[]`     | `[]`        |
| `useHash`    | `use-hash` |             | `boolean`                  | `false`     |


## Dependencies

### Used by

 - [fireenjin-docs-gallery](../gallery)

### Depends on

- [fireenjin-docs-sidebar-component](../sidebar-component)
- [fireenjin-docs-sidebar-endpoint](../sidebar-endpoint)
- [fireenjin-docs-sidebar-model](../sidebar-model)

### Graph
```mermaid
graph TD;
  fireenjin-docs-sidebar --> fireenjin-docs-sidebar-component
  fireenjin-docs-sidebar --> fireenjin-docs-sidebar-endpoint
  fireenjin-docs-sidebar --> fireenjin-docs-sidebar-model
  fireenjin-docs-gallery --> fireenjin-docs-sidebar
  style fireenjin-docs-sidebar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
