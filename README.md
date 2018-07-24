# How to Invoke WebAssembly File in Node.js
Inspired by [StackOverflow](https://stackoverflow.com/questions/45295339/can-i-somehow-build-webassembly-code-without-the-emscripten-glue), build [standalone](https://github.com/kripken/emscripten/wiki/WebAssembly-Standalone) `.wasm` file:

```
emcc test.c -O2 -s WASM=1 -s SIDE_MODULE=1 -o test.wasm
```

Run the app:

```
node index.js
```
