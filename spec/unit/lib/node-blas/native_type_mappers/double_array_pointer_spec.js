describe("Double array pointer mapper", function(){
  var DoubleArrayMapper = require("../../../../../lib/node-blas/native_type_mappers/double_array_pointer");

  it("writes the double array to a buffer", function(){
    spy = spyOn(Buffer.prototype, "writeDoubleLE");
    var pointer = DoubleArrayMapper.toNative([13.2, 23.3, 33.4]);

    expect(spy).toHaveBeenCalledWith(13.2, 0);
    expect(spy).toHaveBeenCalledWith(23.3, 8);
    expect(spy).toHaveBeenCalledWith(33.4, 16);
  });

  it("returns a buffer (pointer) instance for a double array", function(){
    var pointer = DoubleArrayMapper.toNative([13.2, 23.3, 33.4]);

    expect(pointer).toEqual(jasmine.any(Buffer));
    expect(pointer.length).toEqual(8 * 3);
  });

});
