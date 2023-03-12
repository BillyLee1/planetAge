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
