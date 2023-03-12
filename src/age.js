export default function Age(age, altAge) {
  this.age = age;
  this.altAge = altAge;
}

Age.prototype.mercury = function() {
  this.ageAlt = .24 * this.age;
  return this.ageAlt;
}

Age.prototype.venus = function() {
  this.ageAlt = .62 * this.age;
  return this.ageAlt;
}

Age.prototype.mars = function() {
  this.ageAlt = 1.88 * this.age;
  return this.ageAlt;
}

Age.prototype.jupiter = function() {
  this.ageAlt = 11.86 * this.age;
  return this.ageAlt;
}
