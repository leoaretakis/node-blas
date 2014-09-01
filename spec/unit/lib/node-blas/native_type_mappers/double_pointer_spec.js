describe("Double pointer mapper", function(){
  var DoubleMapper = require("../../../../../lib/node-blas/native_type_mappers/double_pointer");

  it("writes the double value to a buffer", function(){
    spy = spyOn(Buffer.prototype, "writeDoubleLE");
    var pointer = DoubleMapper.toNative(18.1);

    expect(spy).toHaveBeenCalledWith(18.1, 0);
  });

  it("returns a buffer (pointer) instance for a double", function(){
    var pointer = DoubleMapper.toNative(43.4);

    expect(pointer).toEqual(jasmine.any(Buffer));
    expect(pointer.length).toEqual(8);
  });

});
