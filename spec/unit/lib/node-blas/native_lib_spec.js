describe("Native BLAS library tests", function(){
  var BLAS = require("../../../../lib/node-blas/native_lib");

  it("contains the dasum_ function", function(){
    expect(BLAS["dasum_"]).toBeDefined();
  });

});
