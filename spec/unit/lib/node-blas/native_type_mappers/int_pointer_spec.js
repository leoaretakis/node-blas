describe("Int pointer mapper", function(){
  var IntMapper = require("../../../../../lib/node-blas/native_type_mappers/int_pointer");

  it("writes the int value to a buffer", function(){
    spy = spyOn(Buffer.prototype, "writeInt32LE");
    var pointer = IntMapper.toNative(13);

    expect(spy).toHaveBeenCalledWith(13, 0);
  });

  it("returns a buffer (pointer) instance for an integer", function(){
    var pointer = IntMapper.toNative(13);

    expect(pointer).toEqual(jasmine.any(Buffer));
    expect(pointer.length).toEqual(4);
  });

});
