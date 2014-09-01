var ref = require('ref');

var DOUBLE_BYTE_NUM = 8;

var mapper = {
  toNative: function(value){
    var pointer = new Buffer(DOUBLE_BYTE_NUM);
    pointer.writeDoubleLE(value, 0);

    return pointer;
  }
}

module.exports = mapper;
