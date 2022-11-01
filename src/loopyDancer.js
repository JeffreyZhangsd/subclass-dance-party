var makeLoopyDancer = function(top, left) {
  makeDancer.apply(this, arguments);
}

makeLoopyDancer.prototype = Object.create(makeDancer.prototype);
makeLoopyDancer.prototype.constructor = makeLoopyDancer;