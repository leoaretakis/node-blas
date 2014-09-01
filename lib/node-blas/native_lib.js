var FFI = require('ffi');

var BLAS = new FFI.Library('libblas', {
  "dasum_": ["double", ["pointer", "pointer", "pointer"]]
});

module.exports = BLAS;
