var ref = require('ref');

var INT_BYTE_NUM = 4;

var mapper = {
  toNative: function(intArray){
    var pointer = new Buffer(INT_BYTE_NUM * intArray.length);

    intArray.forEach(function(value, index){
      pointer.writeInt32LE(value, index * INT_BYTE_NUM);
    });

    return pointer;
  }
}

module.exports = mapper;
