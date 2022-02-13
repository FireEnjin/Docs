# fireenjin-docs-gallery

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute              | Description | Type                       | Default            |
| ------------------- | ---------------------- | ----------- | -------------------------- | ------------------ |
| `components`        | --                     |             | `ComponentPresetOptions[]` | `[]`               |
| `endpoints`         | --                     |             | `EndpointPresetOptions[]`  | `[]`               |
| `heading`           | `heading`              |             | `string`                   | `'FireEnjin Docs'` |
| `host`              | `host`                 |             | `string`                   | `undefined`        |
| `ionicDocsFilePath` | `ionic-docs-file-path` |             | `string`                   | `undefined`        |
| `models`            | --                     |             | `ModelPresetOptions[]`     | `[]`               |
| `useHash`           | `use-hash`             |             | `boolean`                  | `false`            |


## Dependencies

### Depends on

- [fireenjin-docs-sidebar](../sidebar)
- stencil-router
- stencil-route

### Graph
```mermaid
graph TD;
  fireenjin-docs-gallery --> fireenjin-docs-sidebar
  fireenjin-docs-gallery --> stencil-router
  fireenjin-docs-gallery --> stencil-route
  fireenjin-docs-sidebar --> fireenjin-docs-sidebar-component
  fireenjin-docs-sidebar --> fireenjin-docs-sidebar-endpoint
  fireenjin-docs-sidebar --> fireenjin-docs-sidebar-model
  style fireenjin-docs-gallery fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
