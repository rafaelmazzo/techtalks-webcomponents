# fn-product-card



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description          | Type           | Default     |
| -------- | --------- | -------------------- | -------------- | ----------- |
| `code`   | `code`    | Product code         | `string`       | `'000000'`  |
| `image`  | `image`   | Product image URL    | `string`       | `undefined` |
| `name`   | `name`    | Product name         | `string`       | `''`        |
| `price`  | --        | Product price object | `ProductPrice` | `undefined` |
| `tags`   | --        | Product tags         | `ProductTag[]` | `undefined` |


## Dependencies

### Depends on

- [fn-tag](../fn-tag)
- [fn-button](../fn-button)

### Graph
```mermaid
graph TD;
  fn-product-card --> fn-tag
  fn-product-card --> fn-button
  style fn-product-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
