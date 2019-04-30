# The contents of the wasm workshop, part 2

There are three examples of using `wasm-pack`:
 - with [es6](es6) modules
 - with [node.js](nodejs)
 - with [webpack](webpack)

## Setting up

Add compilation target to the toolchain

```
rustup target add wasm32-unknown-unknown
```

Install `wasm-pack`

```
cargo install wasm-pack --version 0.8.1
```

Optionally, install static server

```
cargo install https
```

For [node.js](nodejs) and [webpack](webpack) examples
you will need [node.js](https://nodejs.org) binary installed
