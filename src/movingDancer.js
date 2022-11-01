var movingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
}

movingDancer.prototype = Object.create(makeDancer.prototype);
movingDancer.prototype.constructor = movingDancer;

movingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.animate( {left: "+=25"});
  this.$node.animate( {left: "-=25"});
}