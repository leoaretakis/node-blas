describe("Int array pointer mapper", function(){
  var IntArrayMapper = require("../../../../../lib/node-blas/native_type_mappers/int_array_pointer");

  it("writes the int array to a buffer", function(){
    spy = spyOn(Buffer.prototype, "writeInt32LE");
    var pointer = IntArrayMapper.toNative([13, 23, 33]);

    expect(spy).toHaveBeenCalledWith(13, 0);
    expect(spy).toHaveBeenCalledWith(23, 4);
    expect(spy).toHaveBeenCalledWith(33, 8);
  });

  it("returns a buffer (pointer) instance for an int array", function(){
    var pointer = IntArrayMapper.toNative([13, 23, 33]);

    expect(pointer).toEqual(jasmine.any(Buffer));
    expect(pointer.length).toEqual(4 * 3);
  });

});
