const Module = require('./test.js');
const wasm = Module({wasmBinaryFile: 'test.wasm'});
wasm.onRuntimeInitialized = function() {
    console.log(wasm._add(40, 40));
};




// const util = require('util');
// const fs = require('fs');
// var source = fs.readFileSync('./test.wasm');
// const env = {
//     memoryBase: 0,
//     tableBase: 0,
//     memory: new WebAssembly.Memory({
//       initial: 256
//     }),
//     table: new WebAssembly.Table({
//       initial: 0,
//       element: 'anyfunc'
//     })
//   }

// var typedArray = new Uint8Array(source);

// WebAssembly.instantiate(typedArray, {
//   env: env
// }).then(result => {
//   console.log(util.inspect(result, true, 0));
//   console.log(result.instance.exports._add(9, 9));
//   // const p = result.instance.exports._create(10, 10);
//   // console.log(util.inspect(p, true, 0));
//   // result.instance.exports._destroy(p);
// }).catch(e => {
//   // error caught
//   console.log(e);
// });