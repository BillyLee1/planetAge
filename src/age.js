export default function Age(age, altAge) {
  this.age = age;
  this.altAge = altAge;
}

Age.prototype.mercury = () => {
  this.ageAlt = .24 * this.age;
  return ageAlt;
}
