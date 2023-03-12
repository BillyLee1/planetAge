export default function Age(age, altAge, pBday, fBday) {
  this.age = age;
  this.altAge = altAge;
  this.pBday = pBday;
  this.fBday = fBday;
}

Age.prototype.mercury = function() {
  let numb = ((1/.24) * this.age).toFixed(2)
  this.ageAlt = parseFloat(numb);
  return this.ageAlt;
}

Age.prototype.venus = function() {
  let numb = ((1/.62) * this.age).toFixed(2)
  this.ageAlt = parseFloat(numb);
  return this.ageAlt;
}

Age.prototype.mars = function() {
  let numb = ((1/1.88) * this.age).toFixed(2)
  this.ageAlt = parseFloat(numb);
  return this.ageAlt;
}

Age.prototype.jupiter = function() {
  let numb = ((1/11.86) * this.age).toFixed(2)
  this.ageAlt = parseFloat(numb);
  return this.ageAlt;
}
