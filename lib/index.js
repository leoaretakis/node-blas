var BaseMapper = require('./node-blas/native_function_mappers/base_mapper'),
    DoubleArrayMapper = require("./node-blas/native_type_mappers/double_array_pointer"),
    DoubleMapper = require("./node-blas/native_type_mappers/double_pointer"),
    IntArrayMapper = require("./node-blas/native_type_mappers/int_array_pointer"),
    IntMapper = require("./node-blas/native_type_mappers/int_pointer");

var dasumMap = new BaseMapper('dasum_',
  [ IntMapper, DoubleArrayMapper, IntMapper ], null);


var BLAS = require('./node-blas/native_lib');

console.log('res',
  BLAS[dasumMap.nativeFunctionName].apply(null, dasumMap.generateArguments(3, [3,3,2], 1)));
