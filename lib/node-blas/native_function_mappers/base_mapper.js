var BaseMapper = function(nativeFunctionName, argumentMappers, returnType){

  this.argumentMappers = argumentMappers;

  this.returnType = returnType;

  this.nativeFunctionName = nativeFunctionName;

};

BaseMapper.prototype.generateArguments = function () {
  var result = [];

  if (this.argumentMappers.length !== arguments.length) throw new Error('wrong mapping');

  for(var i = 0; i < this.argumentMappers.length; i++) {
    result.push(this.argumentMappers[i].toNative(arguments[i]));
  }

  return result;
}

module.exports = BaseMapper;
