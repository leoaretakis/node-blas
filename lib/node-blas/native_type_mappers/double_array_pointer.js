var ref = require('ref');

var DOUBLE_BYTE_NUM = 8;

var mapper = {
  toNative: function(doubleArray){
    var pointer = new Buffer(DOUBLE_BYTE_NUM * doubleArray.length);

    doubleArray.forEach(function(value, index){
      pointer.writeDoubleLE(value, index * DOUBLE_BYTE_NUM);
    });

    return pointer;
  }
}

module.exports = mapper;
