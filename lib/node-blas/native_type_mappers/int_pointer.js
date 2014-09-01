var ref = require('ref');

var INT_BYTE_NUM = 4;

var mapper = {
  toNative: function(value){
    var pointer = new Buffer(INT_BYTE_NUM);
    pointer.writeInt32LE(value, 0);

    return pointer;
  }
}

module.exports = mapper;
