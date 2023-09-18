# to-style-ts

Convert react-like css objects to style strings. This package is not a drop in replacement for [to-style](https://www.npmjs.com/package/to-style), as nested styles are not supported.

Property names are expected to be camelCase. Properties with vendor prefixes should be UpperCamelCase / PascalCase, with the exception of `ms`.

## Usage

`to-style-ts` has one named export: `toStyleString`.

```ts
import { toStyleString } from "to-style-ts";

toStyleString({
  width: "10px",
  height: 10,
  margin: "1em",
  msFlexPositive: 2,
  MozBoxFlex: 2,
});
// width:10px;height:10px;margin:1em;-ms-flex-positive:2;-moz-box-flex:2;
```

## Contributing

To install bun:

<https://bun.sh/docs/installation>

To install dependencies:

```bash
bun install
```

To build:

```bash
bun run build
```

## License

Copyright © 2023 Alexander Liu

MIT License
